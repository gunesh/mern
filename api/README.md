# Introduction 
This is the directory CMS-APIs. Please use below ports appropriately.

# IMPORTANT:
Create a .gitignore in each directory and except for your code, please keep all other code in the gitignore. The reason being, we will create a feature from develop and develop has entire code repository. If a new feature is created, all the code is imported (as we are creating a branch from develop). If later you checkin your code and old code of others, it will either create conflicts or chaos.

So, except your code, all the other code should be in .gitignore and SHOULD NOT be checked in.

# Ports used for Bid2Win for development
3000 - cms-api
3001 - auctions
3002 - bids
3003 - masterdata
3004 - users
3005 - payments
3006 - reports
3010 - cms-app
252657 - Cockroach DB
