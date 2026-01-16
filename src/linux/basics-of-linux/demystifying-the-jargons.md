# Demystifying the Jargons

- *terminal* is an application you execute commands from.
- *directory* is a synonym for a *folder*.  
- *shell* is the program that actually executes your commands. Think of `cmd.exe` or *PowerShell* on *Windows*.  
  On most linux distros, `bash` is usually the default shell, but I recommend using `fish` as your default shell and `bash` for writing shell scripts.  
  <small>Refer to the [General Resources > Changing Shells](/linux/general-resources/changing-shells.md) section for a guide to list and change your *shell*.</small>

- *arguments* are the extra options you use with a command.  
  Example: `grep -i bash /etc/shells`  
  Here, `-i bash /etc/shells` are arguments for `grep`
- *path* can either refer to the location of a *directory* or *file*, or a special *environment variable* `$PATH` that contains the locations from where you can launch and execute commands.
- *environment variable* is a *shell variable* that works and functions mostly like variables in any programming language.
