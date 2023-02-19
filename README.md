# http-bench
    
测试 `deno`, `node` 和 `go` 相关框架的性能

<br />

## 标准

压测由 [plow](https://github.com/six-ddc/plow) 提供支持

```shell
plow http://127.0.0.1:3000/ -c 200 -n 100000
```

- 同时刻下 200 个连接 
- 共计 100000 个请求

<br />


## 结果

| 框架  | 最小延迟 | 平均延迟 | 最大延迟 |
| ----- | -------- | -------- | -------- |
| deno  | 1.968    | 7.63     | 27.614   |
| node  | 0        | 8.912    | 60.042   |
| hono  | 0.515    | 7.208    | 25.578   |
| gin   | 0        | 2.22     | 41.269   |
| koa   | 0        | 11.941   | 70.326   |
| nitro | 2.101    | 13.321   | 60.149   |

平均延迟下，[gin](https://github.com/gin-gonic/gin) 的性能最好。

而原生 [deno](https://github.com/denoland/deno) 和 [hono](https://github.com/honojs/hono) 对最大延迟控制得最好。

![bench](./bench.png)



		
	

<br />


## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).