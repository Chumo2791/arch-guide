(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[922],{1331:(a,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>s});const s={key:"v-2a4923dc",path:"/play-and-office/media.html",title:"视频影音",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"音视频播放器",slug:"音视频播放器",children:[]},{level:2,title:"视频播放器",slug:"视频播放器",children:[]}],filePathRelative:"play-and-office/media.md",git:{updatedTime:1623251917e3,contributors:[{name:"LINUXP",email:"66715738+LagrangeOranges@users.noreply.github.com",commits:1},{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},9870:(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var s=e(6252);const c=(0,s.uE)('<h1 id="视频影音"><a class="header-anchor" href="#视频影音">#</a> 视频影音</h1><p>本节记录在 arch linux 上观看影视，收听音乐等相关信息。</p><h2 id="音视频播放器"><a class="header-anchor" href="#音视频播放器">#</a> 音视频播放器</h2><p>网络音乐收听可以使用官方网易云音乐，qq 音乐，或者一些资源整合类型的第三方客户端，它们的资源是全网整合，一般较为完整。官方客户端已经多年没有更新。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S netease-cloud-music <span class="token comment">#官方网易云音乐(ArchLinuxCN)</span>\nyay -S yesplaymusic-electron <span class="token comment">#目前最强第三方网易云客户端</span>\nyay -S cocomusic <span class="token comment">#存在隐藏下载功能的客户读</span>\nyay -S qqmusic-bin <span class="token comment">#QQ 音乐</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="视频播放器"><a class="header-anchor" href="#视频播放器">#</a> 视频播放器</h2><p>本地音视频播放一般使用 vlc 或 mpv, 也可使用SMplayer</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S vlc <span class="token comment">#VLC 播放器</span>\n<span class="token function">sudo</span> pacman -S mpv <span class="token comment">#MPV 播放器</span>\n<span class="token function">sudo</span> pacman -S smplayer <span class="token comment">#SMplayer 播放器</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',8),l={href:"https://aur.archlinux.org/packages/zy-player-bin/",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("zy-player"),p=(0,s.Uk)("是一个跨平台视频资源播放器, 整合全网资源，可以播放一些电影。"),i={render:function(a,n){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[c,(0,s.Wm)("p",null,[(0,s.Wm)("a",l,[r,(0,s.Wm)(e)]),p])],64)}}}}]);