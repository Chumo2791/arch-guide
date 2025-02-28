---
title: 可选配置（基础）
sidebarDepth: 2
---

# 其它可选配置（基础篇）

> ### 🎑 一分耕耘，一分收获
>
> 这一节的配置都是可选的。这些配置根据个人喜好进行配置，往往可以让系统变得更好用

> ### 🔖 这一节将会讨论：
>
> [[toc]]

Linux 基础相关的一些配置（如 alias 的配置）**不会**被讨论。

## ⚙ 调整部分系统设置

### 以空会话启动

默认情况下，KDE 桌面环境中关机之后再开机会恢复先前保存的对话（如浏览器没有关掉，那么开机之后浏览器还在）。

如果你不喜欢这样，请按照以下步骤设置：

1. 打开 `系统设置` > 点击侧栏 `开机与关机` > `桌面会话`

2. 将 `登入时` 的选项改为 `以空会话启动`：

![empty](../static/advanced/optional-cfg/empty.png)

3. 点击 `应用` 保存设置

### 点击文件 / 文件夹行为

默认情况下，KDE 桌面环境中打开文件 / 文件夹是单击，若不习惯常常造成误触发。

若希望改为双击打开文件 / 文件夹（类似 win10），请按照以下步骤设置：

1. 打开 `系统设置` > 点击侧栏 `工作区行为` > `常规行为`

2. 将 `点击文件或文件夹时` 的选项改为 `选中它们`：

![select](../static/advanced/optional-cfg/select.png)

3. 点击 `应用` 保存设置

## 🀄 字体设置

字体可以在 `系统设置` > `外观` > `字体` 中进行设置，一般默认即可：

![font](../static/advanced/optional-cfg/font.png)

有关用户全局级别更改日文异型字的设置，可参阅 [archWiki 相关说明](<https://wiki.archlinux.org/index.php/Localization_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)/Simplified_Chinese_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E4%BF%AE%E6%AD%A3%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E6%98%BE%E7%A4%BA%E4%B8%BA%E5%BC%82%E4%BD%93%EF%BC%88%E6%97%A5%E6%96%87%EF%BC%89%E5%AD%97%E5%BD%A2>)。

关于字体的更多设置请参阅 [系统美化]()。

## 🍀️ 输入法

由于 Fcitx5 自带词库简陋，部分本地化符号难以输入（如中文输入下按下 `/` 键无法打出 `、`），Emoji 输入复杂等问题，本指南提供额外输入方案。

在步骤 [11. 安装输入法](./desktop-env-and-app.md#_11-安装输入法) 中，我们已经安装了 Fcitx5 相关的包。接下来的操作要依赖之前的包。

1. 通过以下命令安装 Rime 输入法：

```bash
sudo pacman -S fcitx5-rime
```

![rime_step-1](../static/advanced/optional-cfg/rime-1.png)

2. 然后添加 Rime 输入法。打开 `系统设置` > 点击侧栏 `区域设置` > `输入法`：

![rime_step-2](../static/advanced/optional-cfg/rime-2.png)

::: tip ℹ️ 提示

若提示检测到更新，点击 `更新` 即可。

:::

3. 点击 `添加输入法` > 找到**汉语**下的 `Rime` > 点击 `添加`：

![rime_step-3](../static/advanced/optional-cfg/rime-3.png)

4. 若不想要之前的 Pinyin 输入法了，可以点击它最右边的按钮移除掉：

![remove](../static/advanced/optional-cfg/remove.png)

5. 通过以下命令安装 [🍀️ 四叶草拼音输入方案](https://github.com/fkxxyz/rime-cloverpinyin)<sup>cn / aur</sup>：

:::: code-group
::: code-group-item cn

```bash
sudo pacman -S rime-cloverpinyin
```

:::
::: code-group-item aur

```bash
yay -S aur/rime-cloverpinyin
```

:::
::::

![rime_step-4](../static/advanced/optional-cfg/rime-4.png)

5. 然后切换到 🍀️ 四叶草拼音输入方案。使用 `vim` 创建并编辑下述文件：

```bash
mkdir ~/.local/share/fcitx5/rime # 创建 rime 目录
vim ~/.local/share/fcitx5/rime/default.custom.yaml
```

在文件中加入以下内容：

```yaml
patch:
  "menu/page_size": 8
  schema_list:
    - schema: clover
```

其中 `8` 表示打字的时候输入面板的每一页的候选词数目，可以设置成 `1 ~ 9` 任意数字。

![rime_step-5](../static/advanced/optional-cfg/rime-5.png)

::: tip ℹ️ 提示

若有需要，关于 `default.custom.yaml` 文件的更多解释，可以参考 [Rime 官方定制指南](https://github.com/rime/home/wiki/CustomizationGuide)。

:::

6. 保存并退出 `vim`

7. 在可输入的位置通过 `Ctrl` + `空格` 切换到 `Rime` 输入法（此时将提示 `Rime` 就绪），在输入法托盘菜单的 `🌏 方案列表` 里面应该就有 `🍀️四叶草拼音输入法` 的选项了：

![rime_step-6](../static/advanced/optional-cfg/rime-6.png)

::: tip ℹ️ 提示

若之前 Rime 输入法已经启动了，那么请右键输入法托盘图标 > 点击 `重新部署`。在输入法托盘菜单的 `🌏 方案列表` 里应该就有 `🍀️四叶草拼音输入法` 的选项了。

若 `🍀️四叶草拼音输入法` 不是默认方案，只需点击 `🌏 方案列表` > 点击 `🍀️四叶草拼音输入法` 即可：

![rime_step-7](../static/advanced/optional-cfg/rime-7.png)

:::

8. 尝试在各个软件中输入中文：

![rime_step-8](../static/advanced/optional-cfg/rime-8.png)

::: tip ℹ️ 提示

同样的，通过 `Ctrl` + `空格` 切换中英文输入（若 Pinyin 输入法未移除则会在这三者之间循环切换）。

:::

关于 Fcitx5 输入法的美化请参阅 [系统美化]()。

## 🚀 zsh

zsh 完全兼容 bash，但相比 bash，又有诸多优点：

1. 更强大的 `tab` 补全
2. 更智能的切换目录
3. 大小写字母自动更正
4. 更强大的 `alias` 命令
5. 丰富多彩的主题
6. 可以集成各种类型的插件

> #### 🍧 碎碎念
>
> 当然，也有很多人对 bash 爱的深沉，这些都看个人喜好啦。

::: tip ℹ️ 提示

[oh-my-zsh](https://ohmyz.sh/) 实际上并没有那么好用，反而拖慢了 Zsh 的速度，本指南不会介绍。

若有需要请自行查阅相关资料。

:::

1. 通过以下命令安装 zsh 相关的包：

```bash
sudo pacman -S zsh zsh-autosuggestions zsh-syntax-highlighting zsh-completions
```

> 📑 相关包说明：
>
> - [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions) —— 命令自动补全插件
> - [`zsh-syntax-highlighting`](https://github.com/zsh-users/zsh-syntax-highlighting) —— 语法上高亮插件
> - [`zsh-completions`](https://github.com/zsh-users/zsh-completions) —— 补充补全定义

![zsh_step-1](../static/advanced/optional-cfg/zsh-1.png)

2. 安装 [autojump](https://github.com/wting/autojump)<sup>cn / aur</sup> 插件：

:::: code-group
::: code-group-item cn

```bash
sudo pacman -S autojump
```

:::
::: code-group-item aur

```bash
yay -S aur/autojump
```

:::
::::

![zsh_step-2](../static/advanced/optional-cfg/zsh-2.png)

3. 更改账户的默认 Shell：

:::: code-group
::: code-group-item 非 root 账户

```bash
chsh -l # 查看安装了哪些 Shell
chsh -s /usr/bin/zsh # 修改当前账户的默认 Shell
```

:::
::: code-group-item root

```bash
chsh -l # 查看安装了哪些 Shell
sudo chsh -s /usr/bin/zsh root
```

:::
::::

![zsh_step-3](../static/advanced/optional-cfg/zsh-3.png)

![zsh_step-4](../static/advanced/optional-cfg/zsh-4.png)

::: tip ℹ️ 提示

可以不为 root 账户更改默认 shell。

:::

4. 注销并重新登录 > 打开终端，此时会弹出如下界面进行设置：

![zsh_step-5](../static/advanced/optional-cfg/zsh-5.png)

- 按下 `0` 将创建一个只包含注释的 `~/.zshrc` 文件，在下次启动时不会再次弹出设置选项。
- 按下 `1` 即可进入设置：

```zsh
Please pick one of the following options:

(1)  Configure settings for history, i.e. command lines remembered
     and saved by the shell.  (Recommended.)

(2)  Configure the new completion system.  (Recommended.)

(3)  Configure how keys behave when editing command lines.  (Recommended.)

(4)  Pick some of the more common shell options.  These are simple "on"
     or "off" switches controlling the shell's features.

(0)  Exit, creating a blank ~/.zshrc file.

(a)  Abort all settings and start from scratch.  Note this will overwrite
     any settings from zsh-newuser-install already in the startup file.
     It will not alter any of your other settings, however.

(q)  Quit and do nothing else.  The function will be run again next time.
```

根据提示完成设置即可。也可以创建一个只包含注释的 `~/.zshrc` 文件以使用默认值。

::: tip ℹ️ 提示

root 账户需要手动创建 `root/.zshrc` 文件。

:::

::: tip ℹ️ 提示

若希望重新设置，只需要把 `~/.zshrc` 文件删掉即可。

:::

5. 为了让插件生效，需要修改 `~/.zshrc`。使用 `vim` 编辑 `~/.zshrc` 文件：

:::: code-group
::: code-group-item 非 root 账户

```zsh
vim ~/.zshrc
```

:::
::: code-group-item root

```zsh
sudo vim root/.zshrc
```

:::
::::

将以下内容分别添加到需要设置 zsh 账户的 `~/.zshrc` 中：

```zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/autojump/autojump.zsh
```

![zsh_step-6](../static/advanced/optional-cfg/zsh-6.png)

6. 关闭并重新打开终端，测试一下：

![zsh_step-7](../static/advanced/optional-cfg/zsh-7.png)

::: tip ℹ️ 提示

有关 autojump 的使用可以参阅 [autojump repo](https://github.com/wting/autojump)。

:::

::: tip ℹ️ 提示

可能需要：

- 将在 `~/.bash_profile` 所做的配置复制到 `~/.zsh_profile`
- 将在 `~/.bashrc` 所做的配置复制到 `~/.zshrc`

如在步骤 [1. 配置 root 账户的默认编辑器](./desktop-env-and-app.md#_1-配置-root-账户的默认编辑器) 和 [9. 配置非 root 账户的默认编辑器](./desktop-env-and-app.md#_9-配置非-root-账户的默认编辑器) 所做的配置。

:::

关于 zsh 的美化请参阅 [系统美化]()。

## ✨ DPI 设置

若发现 SDDM 显示字体和图标过小，可以尝试以下步骤。

1. 打开 `系统设置` > 点击侧栏 `开机与关机` > `登录屏幕（SDDM）`：

![dpi-1](../static/advanced/optional-cfg/dpi-1.png)

2. 点击 `同步配置` > `同步`：

![dpi-2](../static/advanced/optional-cfg/dpi-2.png)

3. 重启查看是否成功修改。若大小已经改变，则无需下面的步骤。若没有改变（通常发生在 NVIDIA 独显模式下），请确保你已经按照步骤 []() 安装了 optimus-manager，然后右键 optimus-manager 托盘图标 > 点击 `设置` > 点击侧栏 `NVIDIA`

4. 将 `DPI` 的数值适量提高：

![dpi-3](../static/advanced/optional-cfg/dpi-3.png)

::: tip ℹ️ 提示

`DPI` 数值可参考步骤 [🀄 字体设置](./optional-cfg.md#🀄-字体设置) 中下方的 `固定字体 DPI`：

![dpi-4](../static/advanced/optional-cfg/dpi-4.png)

:::

5. 点击 `确定` 保存设置

6. 重启查看效果

## ⚒ 虚拟机增强功能（客体机插件）

[VirtualBox 客体机插件](https://archlinux.org/packages/?name=virtualbox-guest-utils) 为虚拟机提供了必要的驱动与应用，作用包括改善图像分辨率与鼠标支持等。通过安装此插件，虚拟机分别率会自动适应虚拟机窗口大小。

1. 通过以下命令安装 VirtualBox 客体机插件：

```bash
sudo pacman -S virtualbox-guest-utils
```

2. 启动 `vboxservice` 服务：

```bash
sudo systemctl enable vboxservice.service
```

![virt_step-1](../static/advanced/optional-cfg/virt-1.png)

3. 重启虚拟机 > 点击菜单栏 `设备` > `拖放` > 点击 `双向`：

![virt_step-2](../static/advanced/optional-cfg/virt-2.png)

4. 同理，`共享粘贴板` > 点击 `双向`：

![virt_step-3](../static/advanced/optional-cfg/virt-3.png)

5. 尝试调整窗口大小、共享粘贴板、拖拽文件功能：

![virt_step-4](../static/advanced/optional-cfg/virt-4.png)

archlinux 向 win10 拖拽文件。

::: tip ℹ️ 提示

即使开启了双向拖拽文件，win10 向 archlinux 拖拽文件也可能无效。

:::

![virt_step-5](../static/advanced/optional-cfg/virt-5.png)

archlinux 根据窗口大小自动调整分辨率。

![virt_step-6](../static/advanced/optional-cfg/virt-6.png)

共享粘贴板。
