# Changing Shells

To list available shells in your system, type the following in a terminal:

```bash
cat /etc/shells
```

Note that you can usually install additional shells from your package manager.
To change your default *shell*, type the following in a terminal:

```bash
sudo usermod -s <path_to_shell> $USER
```

Example: `sudo usermod -s /usr/bin/fish $USER`
