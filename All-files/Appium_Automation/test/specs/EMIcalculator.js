const data = require("../pageobjects/data.page");

describe("EMI Calculator Automation", () => {
    it("Verify that the detail results", async () => {
        await data.emicalculatoropen().click();

        await data.amountField().click();

        await data.amountEnter().setValue("100000");

        await data.interestField().click();

        await data.interestEnter().setValue("9");

        await data.periodField().click();

        await data.periodEnter().setValue("2");

        await data.monthField().click();
        await data.monthEnter().setValue("0");

        await data.processongFee().click();
        await data.feeEnter().setValue("2");
        await data.clickCalculate().click();
        await data.monthlyEMIfield().click();

        await data.monthlyEMI().isEqual("4568.47");

        await data.totalInterestField().click();

        await data.totalInterest().isEqual("9643.38");

        await data.processingFeeField().click();

        await data.processingFee().isEqual("2000");

        await data.totalPaymentField().click();

        await data.totalPayment().isEqual("109643.38");
    });

    it("Check Compare Loans Functionality", async () => {
        await data.tapMenu().click();
        await data.comLoanclick().click();
        await data.loan1Enter().setValue("10000");
        await data.interest1Enter().setValue("10");
        await data.month1Enter().setValue("1");
        await data.loan2Enter().setValue("20000");
        await data.interest2Enter().setValue("20");
        await data.month2Enter().setValue("2");
        await data.continue2click().click();
    });
});
