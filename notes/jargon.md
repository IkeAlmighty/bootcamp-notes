# Web Dev Jargon Definitions

  - Blocker - A particular problem that a developer or team is stuck on.
  - Bottleneck - A feature or other part of the development process that is slowing down the journey towards production ready code.
  - local machine - the computer a developer is working on.
  - ssh key - a cryptographically signed digital "key" for determing whether an actor has permissions to communicate and make changes over a network (such as the world wide web).
  - ssh-keygen - a cli tool for creating ssh keys
  - ssh-agent - a cli tool that manages ssh keys on a local machine.
  - base branch - the branch that a branch is based on. In the context of gitflow, if the comparison branch isn't the release branch, then it will be merged back into the base branch. Release branches are merged into the main or production branch and based on the develop branch.
  - comparison branch - a branch that is created from a base branch to create a new feature, hotfix, or release branch.

  - WCAG - Stands for Web Content Accesibility Guidelines. 
  - Element - An element in HTML5 consists of an opening tag and a closing tag. Elements are used for rendering data and providing data to browsers and other programs reading the document.
  - Tag - A tag is the part of the element that defines attributes and scope of an element. An opening tag specifically contains attributes, and a closing tag contains the / character after the initial < bracket to signify the closing of the element's scope.
  
  ### Gitflow terms
   - **main/production branch** - This is where the most stable version of the project code lives, and also often sometimes where the production code lives. It is the base branch for the develop branch.
   - **develop branch** - This is the base branch for feature and release branches.
   - **feature branch** - A feature branch is where new features are developed. Once the feature is fully developed, it is merged into the develop branch and the feature branch is deleted.
   - **release branch** - A release branch is created with the devlop branch as it's base. Code reviews are generally done on the release branch, and if all the reviews are passed then it is merged into the main/production branch.
   - **hotfix branch** - a hotfix branch uses the main/production branch as it's base branch. Hotfixes branches are created when a feature that has already passed code review and been merged into main/production needs corrected.



<style>
    li {
        list-style-type: square;
    }
</style>