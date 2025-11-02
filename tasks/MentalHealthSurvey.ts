import { task } from "hardhat/config";

task("mentalHealthSurvey", "Prints MentalHealthSurvey contract info and stats", async (taskArgs, hre) => {
  try {
    const deployment = await hre.deployments.get("MentalHealthSurvey");
    console.log("MentalHealthSurvey contract address:", deployment.address);
    console.log("Deployment transaction:", deployment.transactionHash);
    console.log("Deployed at block:", deployment.receipt?.blockNumber);

    // Get contract instance
    const MentalHealthSurvey = await hre.ethers.getContractFactory("MentalHealthSurvey");
    const contract = MentalHealthSurvey.attach(deployment.address);

    // Get network info
    const network = await hre.ethers.provider.getNetwork();
    console.log("Network:", network.name, "(Chain ID:", network.chainId.toString() + ")");

    // Try to get some basic stats if possible
    try {
      const accounts = await hre.ethers.getSigners();
      const deployer = accounts[0];
      console.log("Checking stats for deployer:", deployer.address);

      const count = await contract.getSurveyCount(deployer.address);
      console.log("Deployer survey count:", count.toString());
    } catch (e) {
      console.log("Could not fetch user stats (expected on fresh deployment)");
    }

  } catch (e) {
    console.error("MentalHealthSurvey contract not deployed. Run 'npx hardhat deploy' first.");
  }
});

task("mentalHealthSurvey:submit", "Submit a test survey (for testing purposes only)")
  .addParam("stress", "Stress level (0-100)", "50")
  .addParam("anxiety", "Anxiety level (0-100)", "30")
  .addParam("mood", "Mood score (0-100)", "70")
  .addParam("sleep", "Sleep quality (0-100)", "80")
  .addParam("energy", "Energy level (0-100)", "65")
  .setAction(async (taskArgs, hre) => {
    try {
      const { stress, anxiety, mood, sleep, energy } = taskArgs;

      // Validate inputs
      const validateRange = (value: number, field: string) => {
        if (value < 0 || value > 100) {
          throw new Error(`${field} must be between 0 and 100`);
        }
      };

      validateRange(parseInt(stress), "Stress level");
      validateRange(parseInt(anxiety), "Anxiety level");
      validateRange(parseInt(mood), "Mood score");
      validateRange(parseInt(sleep), "Sleep quality");
      validateRange(parseInt(energy), "Energy level");

      console.log("Submitting test survey with values:");
      console.log(`  Stress: ${stress}/100`);
      console.log(`  Anxiety: ${anxiety}/100`);
      console.log(`  Mood: ${mood}/100`);
      console.log(`  Sleep: ${sleep}/100`);
      console.log(`  Energy: ${energy}/100`);

      // Note: This would require FHEVM setup for actual encrypted submission
      console.log("Note: This is a test command. Actual encrypted submission requires FHEVM setup in frontend.");

    } catch (e) {
      console.error("Error:", e.message);
    }
  });

