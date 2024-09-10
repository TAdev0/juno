"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[1265],{2576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(4848),o=t(8453);const a={title:"Updating Juno"},i="Updating Juno :arrows_counterclockwise:",s={id:"updating",title:"Updating Juno",description:"It is important to run the latest version of Juno as each update brings new features, security patches, and improvements over previous versions. Follow these steps to update Juno:",source:"@site/versioned_docs/version-0.11.8/updating.md",sourceDirName:".",slug:"/updating",permalink:"/updating",draft:!1,unlisted:!1,tags:[],version:"0.11.8",frontMatter:{title:"Updating Juno"},sidebar:"main",previous:{title:"Running Juno on GCP",permalink:"/running-on-gcp"},next:{title:"JSON-RPC Interface",permalink:"/json-rpc"}},d={},c=[{value:"Docker container",id:"docker-container",level:2},{value:"1. Get the latest Docker image",id:"1-get-the-latest-docker-image",level:3},{value:"2. Stop and remove the current Juno container",id:"2-stop-and-remove-the-current-juno-container",level:3},{value:"3. Start a new container with the updated image",id:"3-start-a-new-container-with-the-updated-image",level:3},{value:"Standalone binary",id:"standalone-binary",level:2},{value:"Updating from source",id:"updating-from-source",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"updating-juno-arrows_counterclockwise",children:["Updating Juno ","\ud83d\udd04"]}),"\n",(0,r.jsx)(n.p,{children:"It is important to run the latest version of Juno as each update brings new features, security patches, and improvements over previous versions. Follow these steps to update Juno:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#docker-container",children:"Docker container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#standalone-binary",children:"Standalone binary"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#updating-from-source",children:"Updating from source"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["When running an updated node, use the same ",(0,r.jsx)(n.code,{children:"db-path"})," as before to avoid restarting the sync and use the already synced database."]})}),"\n",(0,r.jsx)(n.h2,{id:"docker-container",children:"Docker container"}),"\n",(0,r.jsx)(n.h3,{id:"1-get-the-latest-docker-image",children:"1. Get the latest Docker image"}),"\n",(0,r.jsxs)(n.p,{children:["Download the latest Juno Docker image from the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/nethermind/juno",children:"nethermind/juno"})," repository:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull nethermind/juno:latest\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-stop-and-remove-the-current-juno-container",children:"2. Stop and remove the current Juno container"}),"\n",(0,r.jsxs)(n.p,{children:["Stop the currently running Juno container. If you're unsure of the container name, use ",(0,r.jsx)(n.code,{children:"docker ps"})," to view all running containers:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker stop juno\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remove the old container to prevent any conflicts with the new version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker rm juno\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-a-new-container-with-the-updated-image",children:"3. Start a new container with the updated image"}),"\n",(0,r.jsx)(n.p,{children:"Run a new container using the updated Docker image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Prepare the snapshots directory\nmkdir -p $HOME/snapshots\n\n# Run the container\ndocker run -d \\\n  --name juno \\\n  -p 6060:6060 \\\n  -v $HOME/snapshots/juno_mainnet:/snapshots/juno_mainnet \\\n  nethermind/juno \\\n  --http \\\n  --http-port 6060 \\\n  --http-host 0.0.0.0 \\\n  --db-path /snapshots/juno_mainnet\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the node is running correctly with the updated version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker logs juno\n"})}),"\n",(0,r.jsx)(n.h2,{id:"standalone-binary",children:"Standalone binary"}),"\n",(0,r.jsxs)(n.p,{children:["Download the latest binary from the ",(0,r.jsx)(n.a,{href:"https://github.com/NethermindEth/juno/releases/latest",children:"Juno GitHub Releases"})," page and replace the existing one."]}),"\n",(0,r.jsx)(n.h2,{id:"updating-from-source",children:"Updating from source"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Pull the latest updates to the codebase\ngit pull\n\n# Rebuild the binary\nmake juno\n\n# OR\n\n# Rebuild the Docker image\ndocker build -t nethermind/juno:latest .\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn how to configure Juno, check out the ",(0,r.jsx)(n.a,{href:"configuring",children:"Configuring Juno"})," guide."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);