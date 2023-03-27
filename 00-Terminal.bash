# 0. Terminal

# As software engineers, we often prefer to issue basic commands to our computer
# via text through a command line interface (CLI). On the Mac, we refer to this as
# the Terminal (or simply "command line"). You'll occasionally hear it called
# the console, as well.

# The language we use in Terminal is called Bash. On the Mac, we use an advanced
# version of Bash called Z Shell or just zsh for short. It is built on Bash, but
# has advanced features.

# In Bash, we use # for comments.

# Documents on our computers are also referred to as "files".

# Documents are stored in folders, which were historically called "directories".

# In terminal, we are always working in a single directory called the "working
# directory". To check what working directory we are in, we can always issue
# the command pwd, or "print working directory".

pwd # present working directory

# This will output the full directory path you are currently working in.

# To create a new folder (or directory), we use the mkdir command followed by
# the name of the new folder.

mkdir new-folder

# This creates a folder called "new-folder" INSIDE (nested in) our present
# working directory.

# To changed your working directory, you can use the cd command to change
# into a different directory. There are several ways...
# 1. If the directory you want to change into is directly inside your
#    present working directory, just enter "cd name-of-folder"

cd new-folder

# 2. If the directory you are in is directly inside the one you  want to change
#    into, you enter "cd .."

cd ..

# 3. If you know the exact path you want, you can change to it any time by
#    entering "cd /the/full/path/you/want"

# There are a few shortcuts for paths:
# "." always refers to the current path.
# ".." always refers to the parent folder, or one directory above in the tree.
# "~" always refers to your home folder, which is /Users/your-user-name

# To create a new file, or to update the last-updated date on a file, we
# use "touch filename".

touch help.txt

# Filenames usually contain 2 parts... the name (above is "help") and the 
# extension (above is ".txt") which denotes the type of file. Some examples:

# .js = JavaScript
# .txt = Text
# .jpg = jpeg image
# and many many more

# The exception is hidden files, which typically start with a period. For example:

# .gitignore

# To LIST the files in your present working directory, use the ls command

ls

# ls can take many flags. A few common examples are:

# -a -- show all files, even hidden files.
# -l -- detailed list
# -h -- file sizes are human-readable

# In Oh My Zsh! there is an alias for "ls -lh" which is "ll" or for "ls -lah" which is "l"

l

# ~~~~~~~~~~~~~~~~~~~~~~~~ USE THIS WITH CAUTION! ~~~~~~~~~~~~~~~~~~~~~~~~
# Finally, to delete a file or folder, use rm -rf filename

rm -rf new-folder

# ~~~~~~~~~~~~~~~~~~~~~~~~ USE THIS WITH CAUTION! ~~~~~~~~~~~~~~~~~~~~~~~~

# To run this file from Terminal, type "source ./00-Terminal.bash".


#### PRACTICE ####

# 1. Create a folder called "practice".
# 2. Go inside that folder and create a file called "test.js".
# 3. Go back out of that folder and remove the folder.
