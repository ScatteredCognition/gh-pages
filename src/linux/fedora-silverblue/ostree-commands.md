# OSTree Commands for Fedora Silverblue

I have provided some commands which will hopefully make your *Fedora Silverblue* journey better.

## Basics

| Commands                                       | Explanation                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `sudo ostree admin pin (-u) <index>`           | Pin a deployment (use `-u` to unpin a deployment)            |
| `sudo ostree admin fsck`                       | Verify the integrity of your*Fedora Silverblue* installation |
| `rpm-ostree kargs --editor`                    | Edit your kernel arguments (kargs)                           |

## Deploying a previous commit

| Commands                                                          | Explanation                                                      |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ostree remote refs fedora`                                       | Find all available refs for*Fedora Atomic* spins you can use     |
| `sudo ostree pull --commit-metadata-only --depth=10 fedora:<ref>` | Pull the last 10 commits for your selected ref                   |
| `ostree log fedora:<ref>`                                         | List all the commits for your selected ref                       |
| `rpm-ostree deploy <ref_version>`                                 | Deploy that specific commit version (removes overlayed packages) |

## Rebase onto a different image

| Commands                                       | Explanation                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| `ostree remote refs fedora`                    | Find all available refs for*Fedora Atomic* spins you can use        |
| `rpm-ostree rebase fedora:<ref>`               | Rebase onto a different image/spin like*Kinoite* or *Cosmic Atomic* |
