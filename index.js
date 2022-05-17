import fs from "fs";

const createEmailMap = (json) => {
    const accountEmailMap = new Map();
    for (let account of json) {
        for (let accountEmail of account.emails) {
            if (!accountEmailMap.has(accountEmail)) {
                accountEmailMap.set(accountEmail, {
                    names: [account.name],
                    applications: [account.application],
                });
                continue;
            }
            let existingEmailInfo = accountEmailMap.get(accountEmail);
            existingEmailInfo.names.push(account.name);
            existingEmailInfo.applications.push(account.application);
        }
    }
    return accountEmailMap;
};

const mergeAccountsFromEmailMap = (emailMap) => {
    const mergedAccounts = [];
    for (let [email, emailInfo] of emailMap) {
        mergedAccounts.push({
            applications: [...emailInfo.applications],
            emails: email,
            name: emailInfo.names[0],
        });
    }
    return mergedAccounts;
};

const rawAccountData = fs.readFileSync("./accounts.json");
const jsonAccountData = JSON.parse(rawAccountData);

const emailMap = createEmailMap(jsonAccountData);
const mergedAccounts = mergeAccountsFromEmailMap(emailMap);
console.log(mergedAccounts);
