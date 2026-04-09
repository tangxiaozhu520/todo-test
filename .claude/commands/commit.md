# 🚀 Commit 助手

当你要求执行 `/commit` 时，我将帮你执行 git commit。为了确保代码质量并遵循本项目的规范，我会在提交前确保满足所有的规范要求。

## 🎯 任务目标

为用户暂存的更改生成并执行一条符合规范的 git commit。

## ⚙️ 执行流程

1. **检查暂存状态**:
   - 运行 `git status` 检查是否有已暂存的文件。
   - 如果没有，运行 `git status` 并询问用户想要暂存哪些文件，或者主动帮用户暂存合理的更改。

2. **分析更改**:
   - 运行 `git diff --staged` 分析当前的更改内容。

3. **生成提交信息**:
   - 根据 `@commitlint/config-conventional` 规范生成提交信息。格式如下：
     `<type>(<scope>): <subject>`
   - `type` 必须是以下之一：
     - `feat`: 新功能
     - `fix`: 修复 bug
     - `docs`: 文档变更
     - `style`: 代码格式（不影响代码运行的变动）
     - `refactor`: 重构（既不是新增功能，也不是修改bug的代码变动）
     - `perf`: 性能优化
     - `test`: 增加测试
     - `build`: 构建系统或外部依赖的变动
     - `ci`: CI 配置的变动
     - `chore`: 其他修改，比如构建流程、依赖管理
     - `revert`: 回滚 commit
   - `subject` 必须简明扼要地描述更改内容。

4. **预检 (Pre-commit) 及提交**:
   - 注意：本项目配置了 husky 的 `pre-commit`（执行 `npx lint-staged` 即 ESLint 检查并修复）和 `commit-msg`（执行 commitlint 校验）。
   - **绝对禁止使用 `--no-verify` 或任何跳过 hook 的参数**。
   - 尝试执行 `git commit -m "提交信息"`。
   - 如果提交失败（通常是因为 ESLint 报错），你需要：
     1. 分析终端输出的 ESLint 错误。
     2. 如果需要，读取并编辑出错的文件来修复 ESLint 错误。
     3. 修复后，重新 `git add` 修改的文件。
     4. 再次尝试 `git commit -m "提交信息"`。
   - 循环修复，直到 commit 成功。

5. **报告结果**:
   - 如果提交成功，告诉用户提交的哈希值和完整的提交信息。
   - 运行 `git log -1` 确认提交。