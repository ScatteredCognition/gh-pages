# Toolbox Setup for Fedora Silverblue

[toolbox](https://containertoolbx.org/)  (*toolbx*) is a utility shipped with *Fedora Silverblue* to easily create and use containers.  
It's usage primarily revolves around using CLI utilities not shipped by default on *Fedora Silverblue*.  
It is stylized and branded as *toolbx*, although `toolbox` is the command name.

There are official *toolbx* images for *Fedora Linux*, *RHEL*, *Ubuntu* and *Arch Linux*.  
Community-maintained *toolbx* images for other distros can be found at [https://github.com/toolbx-images/images](https://github.com/toolbx-images/images)

## Alpine Linux Container

[Alpine Linux](https://www.alpinelinux.org/) is a container-focused distribution that is extremely lightweight in terms of size.  
As such, I recommend using *Alpine Linux* for your *toolbx* containers.

- Create the *toolbx* container by using the *Alpine Linux* *toolbx* image from [toolbx-images](https://github.com/toolbx-images/images) repo.

  ```bash
  toolbox create --image quay.io/toolbx-images/alpine-toolbox:latest toolbox-alpine-cli
  ```

- Enter the *toolbx* container you just created.

  ```bash
  toolbox enter toolbox-alpine-cli
  ```

- Some common commands for managing the *Alpine Linux* container are given below.

  ```bash
  # Install programs
  sudo apk add <program>
  # Remove programs
  sudo apk del <program>
  ### Notice
  NOTE: Put your own CLI programs in /usr/local/bin
  ```

## Fedora Linux Container

*Fedora Linux* is the default distro for the containers created by the `toolbox` tool.

- Create a *Fedora Linux* *toolbx* container.

  ```bash
  toolbox create -d fedora toolbox-fedora-cli
  ```

- Enter the *toolbx* container you just created.

  ```bash
  toolbox enter toolbox-fedora-cli
  ```

You can apply some optional tweaks to your *Fedora Linux* *toolbx* containers to make the default package manager `dnf` faster.

- Open `/etc/dnf/dnf.conf` and add/change the following values:  

  ```bash
  # see `man dnf.conf` for defaults and possible options
  
  [main]
  # Download 20 packages simultaneously
  max_parallel_downloads = 20
  
  # Mirror must maintain download speed of atleast 256*1024 bytes (256KiB/s) for the duration of `timeout` value in seconds
  minrate = 262144
  
  # Mirror must maintain `minrate` amount of download speed in bytes for `timeout` value in seconds
  timeout = 5  
  ```
