# Sophos Denial of Service Attack on Mac OS

Sophos has hampered web developer productivity where I work since the middle
of February 2022.  Running acceptance tests on front-end React projects using
WebDriver IO on a Mac is completely blocked by Sophos's scan extension.

Observing the Activity Moniter while testing shows the scan extension dramatically
leaking ports on the system.  The end result is that the WebDriver logic is unable
to communicate with Chrome.  The system also becomes sluggish whenever anything attempts
to work with the file system.

Inasmuch as I cannot share the propriatary code of my employer with Sophos to allow
them to reproduce the problem.  I created a basic project leveraging Create React App
and the Web Driver IO generic installations then added additional test cases to mimic
the number of scenarios my actual project runs.

As long as Sophos is running the Ransomware Detection feature, the tests are unable
to function properly.

## Setup

### Node

You'll need to install [NodeJS](https://nodejs.org/en/).  The project was built using
version 16.15.0 (just grab the latest LTS version).

### Git & Source

You'll need the project code.  That can be done by installing [git](https://git-scm.com/)
and cloning the [repository](https://github.com/drewed/sophos-mac-dos) or by [downloading
the code from Github directly](https://github.com/drewed/sophos-mac-dos/archive/refs/heads/main.zip).

### Project Dependencies

Run `npm run clean` in a terminal from the root of the project to ensure the
project has the necessary modules installed.
## Executing the test

1. Ensure Sophos is up-to-date and running with "Ransomware Detection (CryptoGuard)" enabled
3. Run `BROWSER=none npm start` to startup the development web server; leave it running
4. In a separate terminal, run `npm run wdio`

### Expected Outcome:

The tests pass successfully in about 12 seconds (this can be verified by
disabling the Sophos Ransomware Detection feature and re-running the rest
of the steps).

### Actual Outcome:

All 8 test cases fail as the tests are never able to communicate with Chrome and
the test server never receives a connection.  It takes about 10 minutes for the
tests to time out.  Observing the Activity Monitor with ports shown or with
the detail dialog open on `com.sophos.endpoijnt.scanextension` will show the port
leaks.