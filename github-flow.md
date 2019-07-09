# GitHub flow

 > GitHub flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. **There's only one rule: anything in the master branch is always deployable.**

## **1. Raise issues**

For example, the current navbar of your web-page is too small and you want to make it bigger for mobile users. Using the GUI on GitHub, go to your web-page repository -> Issues -> (click) New Issue -> (write) title + comment describing the issue.
On the right, assign yourself to the issue.

## **2. Clone a repo**

Remember to navigate to your desired directory using the terminal first before cloning your repository on your computer.
```
git clone git@github.com:username/repo-name.git
```

## **3. Create a new branch**

Branching is a core concept in Git, and the entire GitHub flow is based upon it. It's extremely important that your new branch is created off of master when working on a feature or a fix. Your branch name should be descriptive (e.g., refactor-authentication), so that others can see what is being worked on. When you create a new branch git also automatically switches to it.
```
git checkout -b fix-navbar
```
## **4. Do some coding**

Once your branch has been created, it's time to start making changes. Use:
```
git branch
```
or
```
git status
```
to confirm you are on your 'fix-navbar' branch and then add some code to fix the issue you are working on.

## **5. Add commits**

Once you are done coding, you can commit your work. Whenever you add, edit, or delete a file, you're making a commit, and adding them to your branch. This process of adding commits keeps track of your progress as you work on a feature branch.
Use:
```
git add .
```
to add all files to the staging area.

Commits also create a transparent history of your work that others can follow to understand what you've done and why. Each commit has an associated commit message, which is a description explaining why a particular change was made. Furthermore, each commit is considered a separate unit of change. This lets you roll back changes if a bug is found, or if you decide to head in a different direction. You can relate commits to issues using the 'relates' keyword, followed by the #number of the issue.
```
git commit -m'descriptive commit message (e.g navbar made bigger for mobile devices)
> relates #1'
```
If you want to also automatically close the issue once the commit is merged into the master branch, you can use the 'fixes' or 'closes' keyword in your commit message.
```
git commit -m'descriptive commit message (e.g navbar made bigger for mobile devices)
> relates #1
> fixes #1'
```

## **6. Switch between branches** 

Sometimes, if you have been working on an issue for a while, somebody might have already pushed other changes that have been merged to the master branch. Therefore, you need to ensure you have the most up-to-date version of the master branch before proceeding forward. To do that, switch back to the master branch.
```
git checkout master
```
Pull the latest version of the master branch using:
```
git pull origin master
```

## **7. Merge master to your branch**

Go back to your new branch:
```
git checkout fix-navbar
```
And merge master with your new branch:
```
git merge master
```
If there are conflicts, you must fix them first before proceeding. Take care to fix all merge conflicts diligently.

If there are no conflicts and everything is up-to-date, you can safely proceed to the next step.

## **8. Push your local 'fix-navbar' branch to GitHub**

```
git push origin fix-navbar
```

## **9. Open a pull request on GitHub**

Go to your repo and open a pull request. Assign somebody from your team to review the changes and remember to _**never merge your own pull requests into the master branch**_ when working in a team.

## **10. Discuss and review your code**

The person reviewing your code might ask questions, propose changes or even reject your code. If that is the case, you have to read through the feedback carefully and review your code. For example, if someone comments that you forgot to do something or if there is a bug in the code, you can fix it in your branch and push up the change. GitHub will show your new commits and any additional feedback you may receive in the unified Pull Request view.

### _ProTip_

_Pull Request comments are written in Markdown, so you can embed images and emoji, use pre-formatted text blocks, and other lightweight formatting._

## **11. Deploy**

With GitHub, you can deploy from a branch for final testing in production before merging to master.

Once your pull request has been reviewed and the branch passes your tests, you can deploy your changes to verify them in production. If your branch causes issues, you can roll it back by deploying the existing master into production.

## **12. Merge**

Now that your changes have been verified in production, it is time to have someone merge your code into the master branch.

Once merged, Pull Requests preserve a record of the historical changes to your code. Because they're searchable, they let anyone go back in time to understand why and how a decision was made.

## **We are done! Just kidding, repeat this all over again, and again, and again.**

![happy cat](https://carwad.net/sites/default/files/cat-animated-104985-4895908.gif)
