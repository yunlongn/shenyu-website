import React from "react";
import Translate from "@docusaurus/Translate";

export default [
  {
    title: <Translate>Release Apache Shenyu 2.7.0.1</Translate>,
    description:
        "What's Changed \n fixed some bug when using http-polling mode \n plugin-jwt SPI extension for parsing JWT payloads to ensure compatibility with older......",
    src: "2.7.0.1-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.7.0</Translate>,
    description:
        "✨ New Features \n 1. Upgrade dockerfile java runtime version 8 to 17 \n 2. Upgrade SpringBoot to 3.x \n 3. Support ShenYu Admin Cluster \n ......",
    src: "2.7.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.6.1</Translate>,
    description:
        "New Features  \n  1. Add dubbo annotation analysis for shenyu ingress controller \n  2. Support alert notice \n  3. Add nacos, etcd, eureka as discovery service \n  ......",
    src: "2.6.1-release",
  },
  {
    title: <Translate>Release Apache ShenYu WASM 1.0.0</Translate>,
    description:
        "New Features  \n" +
        "  Simplify usage \n" +
        "  Support the use of user-defined dynamic link libraries \n" +
        "Refactor \n" +
        "  Refactor repository from wasmer-java",
    src: "shenyu-wasm-1.0.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.6.0</Translate>,
    description:
        "New Features  \n  Support shenyu-admin expose prometheus metrics \n  2. Add shenyu Level-1 cache and Level-2 cache \n  3. Save extend plugin jar to shenyu admin \n  ......",
    src: "2.6.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.5.1</Translate>,
    description:
        "New Features  \n  1. Add brpc example. \n  2. Add spring boot starter plugin brpc&admin. \n  3. Add brpc-plugin. \n  ......",
    src: "2.5.1-release",
  },
  {
    title: <Translate>Release Apache Shenyu Nginx 1.0.0-1</Translate>,
    description:
        "New Features  \n  1. Support for listening to Apache ShenYu node changes using Zookeeper. \n  2. Support for listening to Apache ShenYu node changes using ETCD. \n  3. Support for listening to Apache ShenYu node changes using Nacos. \n  ......",
    src: "nginx-1.0.0-1-release",
  },
    {
    title: <Translate>Release Apache Shenyu client .NET 1.0.0</Translate>,
    description:
      "New Features  \n  1. Support ShenYu Admin with http type Register to ShenYu. \n  2. Support use Nacos type Register to ShenYu. \n  3. Support use Consul type Register to ShenYu. \n  ......",
    src: "client-dotnet-1.0.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu client golang 1.0.0</Translate>,
    description:
      "New Features  \n  1. Support ShenYu Admin with http type Register to ShenYu. \n  2. Support use Nacos type Register to ShenYu. \n  3. Support use Consul type Register to ShenYu. \n  ......",
    src: "client-golang-1.0.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.5.0</Translate>,
    description:
      "New Features  \n  1. Add logging-aliyun-sls plugin. \n  2. Add mock plugin. \n  3. Add logging-es plugin. \n  ......",
    src: "2.5.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.4.3</Translate>,
    description:
      "New Features  \n  1. Add http register client retry. \n  2. Support octet-stream context-type. \n  3. Support redirecting to URIs outside of bootstrap and refactoring code. \n  ......",
    src: "2.4.3-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.4.2</Translate>,
    description:
      "New Features  \n  1. Add Mqtt plugin.  \n  2. Add Shenyu-Agent module support observability.  \n  3. Add opentelemetry plugin on Shenyu-Agent module.  \n  ......",
    src: "2.4.2-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.4.1</Translate>,
    description:
      "New Features  \n  1. Support PostgreSQL for admin.  \n  2. Support dynamic loading plugin.  \n  3. Support local modification data mode.  \n  ......",
    src: "2.4.1-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.4.0</Translate>,
    description:
      "New Features  \n  1. Support reading init_script file which is not under resource/directory.  \n  2. Display the plugin menus in categories.  \n  3. Admin add execute Multi-path sql script.  \n  ......",
    src: "2.4.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.3.0</Translate>,
    description:
      "soul-admin  \n  1. Add open field to allow app path authentication or not in sign plugin.  \n  2. Optimize divide plugin to use common plugin template in soul-dashboard.  \n  3. Add default values and rule checks in plugin handler.  \n  ......",
    src: "2.3.0-release",
  },
  {
    title: <Translate>Release Apache Shenyu 2.2.0</Translate>,
    description:
      "New Features  \n  1. Complete plug-in architecture design, plug-in hot-swappable.  \n  2. Fully supports all versions of dubbo, alibaba-dubbo, apache-dubbo.  \n  3. Support dubbo generalization call, multi-parameter, complex parameter interface.  \n  ......",
    src: "2.2.0-release",
  },
];
