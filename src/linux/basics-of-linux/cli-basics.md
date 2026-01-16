# CLI Basics

## Navigating your files and folders

- Use the `pwd` command to list the directory you're currently in.
- Use the `ls -la` command to list the files and directories in the current directory.
- Use the `tree` command to recursively list all files and subdirectories in the current directory.
- Use the `cd <directory>` command to change your directory.

## Viewing and editing text

- Use the `cat <filename>` command to display the text in a file.
- Use the `nano <filename>` command to edit text in a file.  
  Example: `nano /etc/dnf/dnf.conf`

  To save a file, press `Ctrl + S`  
  To exit `nano` after saving a file, press `Ctrl + X`

- To append some text to the end of a file, use ( `>>` )  
  Example: `echo "Hello World" >> file.txt`

- To create/overwrite a file and write a line to it, use ( `>` )  
  Example: `echo "The old file is gone" > file.txt`

- You can use the `awk` and `sed` utilities to make edits to files matching a certain pattern.  
  Useful for scripting, ask AI how to use them.
