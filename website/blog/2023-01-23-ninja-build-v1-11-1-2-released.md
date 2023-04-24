---
title:  xPack Docus Mock v1.11.1-2 released

summary: "Version **1.11.1-2** is a maintenance release, built with the latest build scripts."

docus_mock_version: 1.11.1
docus_mock_date: 30 Aug 2022
version: "1.11.1-2"
npm_subversion: 1
download_url: https://github.com/xpack-dev-tools/docus-mock-xpack/releases/tag/v1.11.1-2/

date:   2023-01-24 00:51:02 +0200
authors: ilg-ul

comments: true

categories:
  - releases
  - docus-mock

tags:
  - releases
  - docus-mock
  - build
  - speed
  - small

---

Version **1.11.1-2** is a maintenance release, built with the latest build scripts.

<!--truncate-->

[The xPack Docus Mock](https://xpack.github.io/dev-tools/docus-mock/)
is a standalone cross-platform binary distribution of
[Docus Mock](https://docus-mock.org).

There are separate binaries for **Windows** (Intel 64-bit),
**macOS** (Intel 64-bit, Apple Silicon 64-bit)
and **GNU/Linux** (Intel 64-bit, Arm 32/64-bit).

:::note Raspberry Pi

The main targets for the Arm binaries
are the **Raspberry Pi** class devices (armv7l and aarch64;
armv6 is not supported).

:::

## Download

The binary files are available from GitHub [Releases]({frontMatter.download_url}).

## Prerequisites

- GNU/Linux Intel 64-bit: any system with **GLIBC 2.27** or higher
  (like Ubuntu 18 or later, Debian 10 or later, RedHat 8 later,
  Fedora 29 or later, etc)
- GNU/Linux Arm 32/64-bit: any system with **GLIBC 2.27** or higher
  (like Raspberry Pi OS, Ubuntu 18 or later, Debian 10 or later, RedHat 8 later,
  Fedora 29 or later, etc)
- Intel Windows 64-bit: Windows 7 with the Universal C Runtime
  ([UCRT](https://support.microsoft.com/en-us/topic/update-for-universal-c-runtime-in-windows-c0514201-7fe6-95a3-b0a5-287930f3560c)),
  Windows 8, Windows 10
- Intel macOS 64-bit: 10.13 or later
- Apple Silicon macOS 64-bit: 11.6 or later

## Install

The full details of installing the **xPack Docus Mock** on various platforms
are presented in the separate
[Install](/docs/install/) page.

### Easy install

The easiest way to install Docus Mock is with
[`xpm`](https://xpack.github.io/xpm/)
by using the **binary xPack**, available as
[`@xpack-dev-tools/docus-mock`](https://www.npmjs.com/package/@xpack-dev-tools/docus-mock)
from the [`npmjs.com`](https://www.npmjs.com) registry.

With the `xpm` tool available, installing
the latest version of the package and adding it as
a dependency for a project is quite easy:

```sh
cd my-project
xpm init # Only at first use.

xpm install @xpack-dev-tools/docus-mock@latest

ls -l xpacks/.bin
```

To install this specific version, use:

<pre className="language-sh">
xpm install @xpack-dev-tools/docus-mock@{frontMatter.version}.{frontMatter.npm_subversion}
</pre>

It is also possible to install Meson Build globally, in the user home folder,
but this requires xPack aware tools to automatically identify them and
manage paths.

```sh
xpm install --global @xpack-dev-tools/docus-mock@latest --verbose
```

### Uninstall

To remove the links created by xpm in the current project:

```sh
cd my-project

xpm uninstall @xpack-dev-tools/docus-mock
```

To completely remove the package from the global store:

```sh
xpm uninstall --global @xpack-dev-tools/docus-mock
```

## Compliance

The xPack Docus Mock generally follows the official
[Docus Mock](https://docus-mock.org) releases.

The current version is based on:

<ul>
<li>Docus Mock version { frontMatter.docus_mock_version } from { frontMatter.docus_mock_date }.</li>
</ul>

## Changes

Compared to the upstream version, the Windows version also supports
spawning scripts via `cmd.exe /c`. These scripts are used by **npm**/**xpm**
to redirect invocations to the central packages repository.

## Bug fixes

- none

## Enhancements

- none

## Known problems

- none

## Shared libraries

On all platforms the packages are standalone, and expect only the standard
runtime to be present on the host.

All dependencies that are build as shared libraries are copied locally
in the `libexec` folder (or in the same folder as the executable for Windows).

### `DT_RPATH` and `LD_LIBRARY_PATH`

On GNU/Linux the binaries are adjusted to use a relative path:

```console
$ readelf -d library.so | grep runpath
 0x000000000000001d (RPATH)            Library rpath: [$ORIGIN]
```

In the GNU ld.so search strategy, the `DT_RPATH` has
the highest priority, higher than `LD_LIBRARY_PATH`, so if this later one
is set in the environment, it should not interfere with the xPack binaries.

Please note that previous versions, up to mid-2020, used `DT_RUNPATH`, which
has a priority lower than `LD_LIBRARY_PATH`, and does not tolerate setting
it in the environment.

### `@rpath` and `@loader_path`

Similarly, on macOS, the binaries are adjusted with `install_name_tool` to use a
relative path.

## Documentation

The original documentation is available
[online](https://docus-mock.org/manual.html).

## Build

The binaries for all supported platforms
(Windows, macOS and GNU/Linux) were built using the
[xPack Build Box (XBB)](https://xpack.github.io/xbb/), a set
of build environments based on slightly older distributions, that should be
compatible with most recent systems.

The scripts used to build this distribution are in:

- `distro-info/scripts`

For the prerequisites and more details on the build procedure, please see the
[README-MAINTAINER](https://github.com/xpack-dev-tools/docus-mock-xpack/blob/xpack/README-MAINTAINER.md) page.

## CI tests

Before publishing, a set of simple tests were performed on an exhaustive
set of platforms. The results are available from:

- [GitHub Actions](https://github.com/xpack-dev-tools/docus-mock-xpack/actions/)
- [Travis CI](https://app.travis-ci.com/github/xpack-dev-tools/docus-mock-xpack/builds/)

## Tests

TBD

## Checksums

The SHA-256 hashes for the files are:

```txt
cbf57ea055028966107fa377b9e4325e4508308fcc47a238f4d678eb65c094ae
xpack-docus-mock-1.11.1-2-darwin-arm64.tar.gz

915eeff2cb8d106804435bca654cc81b35c935f8cd00be3b84e60d42aa5e8555
xpack-docus-mock-1.11.1-2-darwin-x64.tar.gz

28f68d64fdcf5fbb2e816dc4ae049c689ebbac6ddb5156bf7c4cf6b36c1d0efd
xpack-docus-mock-1.11.1-2-linux-arm.tar.gz

44e0263a886a75baf4fb56e348326dfb62ae5325c38a2ba02977982ecb1818a8
xpack-docus-mock-1.11.1-2-linux-arm64.tar.gz

cfd4c4b815183ef513151b05aa576974fc169164d4a706ca1f1b7c350b66107b
xpack-docus-mock-1.11.1-2-linux-x64.tar.gz

da68e7157bda76cb79c9b86ae00fd1856a24f971fdeab7138ab06ab6882c9d13
xpack-docus-mock-1.11.1-2-win32-x64.zip

```

## Deprecation notices

### 32-bit support

Support for 32-bit Intel Linux and Intel Windows was
dropped in 2022. Support for 32-bit Arm Linux (armv7l) will be preserved
for a while, due to the large user base of 32-bit Raspberry Pi systems.

### Linux minimum requirements

Support for RedHat 7 was dropped in 2022 and the
minimum requirement was raised to GLIBC 2.27, available starting
with Ubuntu 18, Debian 10 and RedHat 8.

## Download analytics

- GitHub [xpack-dev-tools/docus-mock-xpack](https://github.com/xpack-dev-tools/docus-mock-xpack/)
  - this release [![Github All Releases](https://img.shields.io/github/downloads/xpack-dev-tools/docus-mock-xpack/v{frontMatter.version}/total.svg)](https://github.com/xpack-dev-tools/docus-mock-xpack/releases/v{frontMatter.version}/)
  - all xPack releases [![Github All Releases](https://img.shields.io/github/downloads/xpack-dev-tools/docus-mock-xpack/total.svg)](https://github.com/xpack-dev-tools/docus-mock-xpack/releases/)
  - [individual file counters](https://somsubhra.github.io/github-release-stats/?username=xpack-dev-tools&repository=docus-mock-xpack) (grouped per release)
- npmjs.com [@xpack-dev-tools/docus-mock](https://www.npmjs.com/package/@xpack-dev-tools/docus-mock)
  - latest releases [![npm](https://img.shields.io/npm/dw/@xpack-dev-tools/docus-mock.svg)](https://www.npmjs.com/package/@xpack-dev-tools/docus-mock/)
  - all @xpack-dev-tools releases [![npm](https://img.shields.io/npm/dt/@xpack-dev-tools/docus-mock.svg)](https://www.npmjs.com/package/@xpack-dev-tools/docus-mock/)

Credit to [Shields IO](https://shields.io) for the badges and to
[Somsubhra/github-release-stats](https://github.com/Somsubhra/github-release-stats)
for the individual file counters.
