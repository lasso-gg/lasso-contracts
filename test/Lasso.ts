import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { utils } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";
import { Artifact } from "hardhat/types";

import { Lasso } from "../src/types";

describe("Lasso", function () {
  const host = "0xEB796bdb90fFA0f28255275e16936D25d3418603"; // superfluid host contract on mumbai
  let lasso: Lasso;
  let owner: SignerWithAddress;
  let account1: SignerWithAddress;

  before(async function () {
    [owner, account1] = await ethers.getSigners();
  });

  beforeEach(async function () {
    const lassoArtifact: Artifact = await artifacts.readArtifact("Lasso");
    lasso = <Lasso>await waffle.deployContract(owner, lassoArtifact, [host]);
  });

  describe("Create service", function () {
    it("should create a new service", async () => {
      await expect(
        lasso
          .connect(account1)
          .createService("Paid Private Discord", "Paid Private Discord", utils.parseEther("0.00003858024")), // Monthly rate = 100
      ).to.emit(lasso, "ServiceCreated");

      expect((await lasso.services(account1.address)).active).to.equal(true);
      expect((await lasso.services(account1.address)).subscribersAmount).to.equal(0);
      expect((await lasso.services(account1.address)).flowRate).to.equal(utils.parseEther("0.00003858024"));
      expect((await lasso.services(account1.address)).title).to.equal("Paid Private Discord");
      expect((await lasso.services(account1.address)).subscriptionType).to.equal("Paid Private Discord");
    });

    it("should revert if flowrate is 0", async function () {
      await expect(
        lasso.connect(account1).createService("Paid Private Discord", "Paid Private Discord", 0),
      ).to.be.revertedWith("FlowRateZero()");
    });

    it("should revert if service is active", async function () {
      await lasso
        .connect(account1)
        .createService("Paid Private Discord", "Paid Private Discord", utils.parseEther("0.00003858024"));

      await expect(
        lasso.connect(account1).createService("AAAAAAA", "AAAAAAA", utils.parseEther("10000")),
      ).to.be.revertedWith(`ServiceAlreadyActive("${account1.address}")`);
    });
  });
});
