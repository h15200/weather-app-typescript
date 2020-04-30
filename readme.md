Can't figure out typescript build out dir and how it relates to the path in node server, so switching to just using ts on the front end js file

Solution: - next time structure like

```
/src
    server.js (from ts)
    index.ts
    call tsc--init on /src for frontend
    ts-config (outdir index.js goes to /public)

    /public
    index.html
    index.css
    index.js (from ts)

/backendTypescript
    server.ts
    call tsc --init inside /backendTypescript
    ts-config (outdir server.js goes to /src)
    server.ts - will now be able to access public, which is inside the outdir
```
