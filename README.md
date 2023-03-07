An app to keep track of your savings goals! This app uses a Ruby on Rails API as the backend, and React as the frontend. Here's how it works:

1) Log in to the app (or sign up):

<img width="627" alt="CleanShot 2023-02-08 at 12 03 35@2x" src="https://user-images.githubusercontent.com/64931297/217642320-c6365f80-8a90-448c-8687-820a57c30993.png">

2) Your dashboard will show you how much you've allocated in your savings goals vs. how much money you have in your savings accounts:

<img width="1395" alt="CleanShot 2023-02-08 at 12 03 50@2x" src="https://user-images.githubusercontent.com/64931297/217642416-99ecbc72-fee9-49cf-9120-949caac9bc75.png">

3) Your Accounts page will show you all your accounts, their amounts, and the breakdown of your total savings amount by account. You can edit accounts, delete accounts, and add new accounts here.

<img width="1195" alt="CleanShot 2023-02-08 at 12 03 58@2x" src="https://user-images.githubusercontent.com/64931297/217642494-31069d67-83f1-423f-b63c-172cc659fa2a.png">


4) Similarly, your funds page will show you all your funds, their allocated and target amounts, the target date for each, and a breakdown of the total allocated towards funds. You can edit funds, delete funds, and add new funds here:

<img width="1177" alt="CleanShot 2023-02-08 at 12 04 28@2x" src="https://user-images.githubusercontent.com/64931297/217642750-6fb63bbc-554c-451d-9fac-441faf0888af.png">

5) You can also edit your name and email address here:

<img width="679" alt="CleanShot 2023-02-08 at 12 04 38@2x" src="https://user-images.githubusercontent.com/64931297/217642786-f529d846-ee40-40d9-8aa1-41c5ee3a7c82.png">

I'm still working on getting the funds and accounts amounts pushed to the home page as soon as you log in (currently, you have to click into each of those individual pages in order for the home page to be populated correctly).

Eventually, I'd like to utilize the Balance product of the Plaid API in order to allow people to sync their actual savings account balances to the app.
