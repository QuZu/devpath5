As it is said in the document, when /messages is written in url area, the hex code of this message written instead of messages  is printed on the screen. For example, when /myfirstapp is typed, it returns the hex encoding of myfirstapp as SHA256 on the screen.
Similarly, when /messages/<hash> is written, if the string of the hash code has been added before, it prints it to the screen, if not, it writes 404 NOT FOUND.

I tried to deploy my application to any web site. But even though I tried deploy for 2 days, I could not solve the problem on the site. The site is going live, it says deploy succesfull, but it doesn't work as it works in localhost. However, it works very well in localhost.
How can you scale your implementation?
First of all, I store the data in local because I didn't want to use a server. For this reason, it is a small application that does not require server requests. However, it can be made more comprehensive in the future by using database and server.

How did you deploy this application?
The errors I encountered during the deployment process only load my home page and cannot fulfill the rest of the requests.
How can you improve this process and make it easy to maintain?
It is very difficult to deploy on some deployment sites.Sometimes,many different deployment or environment variables need to be written. I think they could be simpler. Apart from that, if deploy places such as github are used, the changes made in the project are arranged more easily. Because the changes made are reflected in the deployment in a very short time.So,using git or using repository provides faster maintain
