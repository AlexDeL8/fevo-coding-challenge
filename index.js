import fs from "fs";

const mergeAccountFromEmailMap = (emailMap) => {
    return [];
};

const createEmailMap = () => {
    const rawAccountData = fs.readFileSync("./accounts.json");
    const jsonAccountData = JSON.parse(rawAccountData);

    const accountEmailMap = new Map();
    for (let account of jsonAccountData) {
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

const emailMap = createEmailMap();
// Now, Map is fully populated for each unique email
// Find all info regarding a single Name/Person to merge together
console.log(emailMap);
console.log(emailMap.values());
