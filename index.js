import fs from "fs";

const checkSameAccountName = (name1, name2) => {
    return true;
};

const mergeAccountEmails = (emailList1, emailList2) => {
    return [];
};

const mergeAccounts = () => {
    const rawAccountData = fs.readFileSync("./accounts.json");
    const jsonAccountData = JSON.parse(rawAccountData);

    for (let account of jsonAccountData) {
        console.log(account);
    }
};

mergeAccounts();
