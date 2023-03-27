# Plugin Library for ChatGPT

Last week, [OpenAI announced support for plugins](https://openai.com/blog/chatgpt-plugins). According to the [Documentation](https://platform.openai.com/docs/plugins/introduction), to develop plugins you need to host two files:

- `yourdomain.com/.well-known/ai-plugin.json`: contains metadata for the plugin, including the name and two descriptions of its function - one for the model and one for human users.
- An OpenAPI specification that lists the routes the model has access to, along with natural language descriptions of how to call them. This can be hosted anywhere, and its location is specified by the api/url field in the above file.

However, only a few specs are publicly available (e.g. [Wolfram Alpha](https://www.wolframalpha.com/.well-known/ai-plugin.json)). To extract the rest of them, you can [perform a simple jailbreak](https://app.orchard.ink/view/jailbreaking-chatgpt-plugin-a5b73bfb776948e68c1685b4d9572a70) to get the model to repeat the specs for any plugin.

The instructions from these specs are represented in the model's system prompt as Typescript namespaces - [detailed blog post here](https://app.orchard.ink/view/jailbreaking-chatgpt-plugin-a5b73bfb776948e68c1685b4d9572a70). This repository contains the Typescript-ified specs for every plugin currently available on the platform.