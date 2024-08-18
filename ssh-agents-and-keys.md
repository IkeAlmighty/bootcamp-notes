# SSH Keys and SSH Agents

The tools used:
 - ssh-keygen
 - ssh-agent
 - github

These are notes for setting up ssh keys with your github account so future pushes of projects to github via git will be properly authenticated.

1) use ssh-keygen to create a private and public key
2) use ssh-agent to register your new key on your local machine
3) in the settings on github, add the public key.

It makes sense that public keys are used on the remote end of security systems, because remote ends are more likely to have the data leaked.

