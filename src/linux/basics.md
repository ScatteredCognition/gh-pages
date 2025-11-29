# Basics of using Linux
## Demystifying the Jargons
- The *terminal* is an application you execute commands from.

- The *shell* is the program that actually executes your commands. Think of `cmd.exe` or *PowerShell* on *Windows*.  
  On most linux distros, `bash` is usually the default shell, but I recommend using `fish` as your default shell and `bash` for writing shell scripts.

  To list available shells in your system, type the following in a terminal:
  ```bash
  cat /etc/shells
  ```
  Note that you can usually install additional shells from your package manager.

  To change your default *shell*, type the following in a terminal:
  ```bash
  sudo usermod -s <path_to_shell> $USER
  ```
  Example: `sudo usermod -s /bin/bash $USER`

- *directory* is a synonym for a *folder*.  
- *arguments* are the extra options you use with a command.  
  Example: `grep -i bash /etc/shells`  
  Here, `-i bash /etc/shells` are arguments for `grep`
- *path* can either refer to the location of a *directory* or *file*, or a special *environment variable* `$PATH` that contains the locations from where you can launch and execute commands.
- *environment variable* is a *shell variable* that works and functions mostly like variables in any programming language.

## CLI Basics
### Navigating your files and folders
- Use the `pwd` command to list the directory you're currently in.
- Use the `ls -la` command to list the files and directories in your current directory.
- Use the `tree -C <directory> | less -R` command to list all files and subdirectories ina scorllable window.
- Use the `cd <directory>` command to change your directory.

### Editing text
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

## The Filesystem Layout
A basic overview of the modern linux filesystem is given below.  

- `/boot` or `/efi` is where the bootloader is stored.
- `/home/<username>/` <small>(aliased to `~`)</small> is your user's home directory. <small>(equivalent to `C:\Users\`)</small>
- `/usr` is where your actual system is stored. <small>(equivalent to `C:\Windows\`)</small>  
  <small>Note: Everything here (except `/usr/local/`) is managed by your package manager.</small>
  - `/usr/bin/` - Contains executable files or symlinks to executables.
  - `/usr/sbin/` - Usually either symlinked to `/usr/bin/` or contains extra executables.
  - `/usr/lib*/` - Contains library files `.so` (equivalent to `.dll`)
  - `/usr/share/` - Contains non-executable resources for apps (pictures, config files etc)
    - `/usr/share/applications/` - Contains `.desktop` desktop entry files for applications installed using your package manager.
    - `/usr/share/icons/` - Contains icons for applications to use.
  - `/usr/local/` - A directory for users to install their own apps not managed by the package manager. <small>(system-wide)</small>
- On modern distros, `/bin`, `/sbin`, and `/lib*` directories are usually symlinks which point to their equivalents inside `/usr`, this is called the [/usr merge](https://systemd.io/THE_CASE_FOR_THE_USR_MERGE/).
- `/etc` is where configuration files are stored.
- `/opt` is where third-party apps like *Google Chrome*, *Brave Software* or *DaVinci Resolve* usually install their things.