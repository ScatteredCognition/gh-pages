# Using Podman Quadlets

Sources used: [podman docs](https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html)

## Intro

Podman Quadlet is a Podman/systemd feature that allows you to easily create and start containers on boot.  
A very basic Quadlet for `Syncthing` has been given below, as example is the best way to understand anything.

## Creating a Quadlet file

### Where to put stuff

For a rootless Quadlet (recommended), create a file under...  

- `/etc/containers/systemd/users/` (All users)
- `~/.config/containers/systemd/` (Your user)

with any of the following filename extensions...

- `.container`
- `.volume`
- `.network`
- `.build`
- `.pod`
- `.kube`
- `.artifact`

e.g. for our purposes, we will create the file as follows: `~/.config/containers/systemd/syncthing.container`

### Basic Syntax

For our newly created `syncthing.container` file, we will put the following:

```bash
# syncthing.container
[Unit]
Description=Syncthing Quadlet (User)

[Container]
Image=docker.io/syncthing/syncthing

# Equivalent to: --network host
Network=host

# Equivalent to: --security-opt label=disable
SecurityLabelDisable=yes

# Environment variables
Environment=PUID=0
Environment=PGID=0
Environment=STHOMEDIR=/var/syncthing/.local/state/syncthing

# Volumes
Volume=./%h/:/var/syncthing

[Install]
WantedBy=default.target
```

This is a Quadlet file that roughly corresponds to the following podman command:

```bash
podman create docker.io/syncthing/syncthing \
        --network host \
        --security-opt label=disable \
        -e PUID=0 -e PGID=0 \
        -e STHOMEDIR="/var/syncthing/.local/state/syncthing" \
        -v "$HOME:/var/syncthing"
```

After this, we must run `systemctl daemon-reload --user` so that the podman quadlet systemd generator can generate the necessary systemd `.service` file.

### Listing Quadlets

You can list your current Quadlets by running the following:

```bash
❯ podman quadlet list
NAME                 UNIT NAME          PATH ON DISK                                                          STATUS         APPLICATION
syncthing.container  syncthing.service  /var/home/faeizmahrus/.config/containers/systemd/syncthing.container  inactive/dead  

```

### Fixing errors

IF the `STATUS` field shows `Not loaded`, it means the podman quadlet systemd generator couldn't generate a systemd `.service` file, most likely due to an issue with the Quadlet file's syntax, given everything else is configured correctly.  
To find out the error, run the following:

```bash
## To list errors and the generated .service file for all Quadlets
/usr/lib/systemd/system-generators/podman-system-generator --user --dryrun

## To list only the errors for a single Quadlet
systemd-analyze verify --user --generators=true syncthing.service

```

## Starting the Quadlet

To enable the Quadlet, simply enable the generated systemd `.service` file.

```bash
systemctl enable --user --now syncthing.service
```

Optionally, enable linger for your user so the container stays running even when your user is logged out.

```bash
loginctl enable-linger $USER
```
