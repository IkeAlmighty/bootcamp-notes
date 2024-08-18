# Bootcamp Notes

This is a website I threw together before the start of the bootcamp I am participating in from Nov. to to April 2024/25.

I joined this bootcamp so that I could earn some credentials and more easily network in the developer community to get an entry level job in web development. So publicizing this website seemed like a great way to show my dedication to potential employers as we as help out other people learning about web development.

I thought about using marked per request, or when the server starts, but I decided I would compile the whole website instead and then just serve the raw html files! This means I had to write a build tool, which is really small and contained in 'build-markdown.js'. 

As a consequence of this strategy, the actual express server just serves static files, so it is really small (since express supports this quite easily).

Let me know if you have any suggestions! You could make a pull request ;)

-ike