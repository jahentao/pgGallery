pgGallery
=========

A web based photo gallery powered by Postgres and Spring.

Roadmap
-------
See [http://www.chotchki.us/pggallery](http://www.chotchki.us/pggallery) and the milestone list [here](https://github.com/chotchki/pgGallery/issues/milestones)

Installation 
------------

1. Setup an installation of PostgreSQL 9.1
    1. For linux "apt-get install postgresql-9.1"
    2. For windows goto postgresql.org, download and run their installer.

2. Create a database superuser, for example "pgGallery-admin"
    1. Run "createuser -d -P -s -h YOUR_DB_HOST pgGallery-admin"
    2. Set the password to something strong and random, this will be an admin db account.

3. Create the actual database.
    1. Run "createdb -h YOUR_DB_HOST -U pgGallery-admin -O pgGallery-admin pgGallery "The pgGallery database."

4. Check out the code from GitHub
    1. Create a directory to hold the web code, for example "c:\temp\pgGallery" or ~/pgGallery
    2. git clone git://github.com/chotchki/pgGallery.git into that directory

5. Edit the Jetty config in the src/main/webapp/WEB-INF/jetty-env.xml file.
    1. Edit all the host, user and password fields to match what you created above.
    
6. Ensure you have GraphicsMagick installed. The installer will not complete without it.
	1. The binary must be on your PATH. To check open a command prompt and run "gm". If it runs successfully you are good.

7. Ensure you have Maven installed.

8. Start the site.
    1. cd /CHECKOUT/DIR
    2. mvn jetty:run
    
Support / Development
---------------------
We are on [Google Groups](http://groups.google.com/group/pggallery) and the support address is [pggallery@googlegroups.com](pggallery@googlegroups.com).

DEVELOPMENT NOTES - will move to another file sometime
------------------------------------------------------
Rights
	ANON				- Can view public albums 
	GALLERY_READONLY 	- Can view private albums
	GALLERY_COMMENT		- Can comment on albums
	GALLERY_EDIT		- Can add/delete/modify photos/albums
	
	USER_REGISTERED - Just signed up, cannot do anything
	USER_NORMAL - Entry level
	USER_ADMIN - Can edit other users