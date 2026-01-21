# VSCode Setup for Fedora Silverblue

After flip-flopping between installing *Visual Studio Code* inside a *distrobox* container, layering it on my *Fedora Silverblue* install and just using `nano` + terminal for development, I have finally settled on using the following VSCode setup with [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers).

## Setting up VSCode + Dev Containers

- Download the VSCode appimage from [valicm's GitHub repo](https://github.com/valicm/VSCode-AppImage/releases/tag/latest) and install it using [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever).
- Install `podman-compose`.
- Enable the `podman` socket for your user.

  ```bash
  systemctl enable --user --now podman.socket
  ```

- Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) VSCode extension.
- Goto the *Dev Containers* extension's settings.
- Set the following values for the fields below:
  - `Dev > Containers: Docker Compose Path` -> `podman-compose`
  - `Dev > Containers: Docker Path` -> `podman`
  - `Dev > Containers: Docker Socket Path` ->  
      (whatever socket path `systemctl status --user podman.socket | grep Listen:` shows)

## Using Dev Containers for development

*Dev Containers* basically creates a *Docker*/OCI container for your project from the configuration located inside the `.devcontainer` folder in your project's topmost directory.  
VSCode then SSH's into it so you can develop inside the container as-if it was your own system.  
This is the same concept as *toolbx*. ([discussed here](./toolbox-setup.md))  
> You can find my devcontainer configs at [https://github.com/ScatteredCognition/devcontainers/](https://github.com/ScatteredCognition/devcontainers/)
