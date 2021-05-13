export default {
  data: {
    cards: {
      data: [
        {
          cardTitle: "关键概念",
          cardDesc: "了解基本知识有利于快速成长",
          article1: {
            title: "区块链术语",
            link:
              "key_concepts",
          },
        },
        {
          cardTitle: "FISCO 简介",
          cardDesc: "什么是FISCO?它好在哪？",
          article1: {
            title: "FISCO 是什么",
            link: "introduction",
          },
        },
        {
          cardTitle: "深入浅出 FISCO BCOS",
          cardDesc: "深入了解 FISCO BCOS 的绝好途径",
          article1: {
            title: "深入浅出 FISCO BCOS",
            link: "index"
          }
        }
      ]
    },
    posts: {
      data:
        [
          {
            title: "BSN首批“官方指定区块链应用”出炉，FISCO BCOS社区四个应用入选",
            link: "application$application_bsn_officially_designated",
            type: 'application'
          },
          {
            title: "打造全场景透明管理，建信筑和联手FISCO BCOS助力建造业数字化",
            link: "application$application_construction_industry_digitalization_jianxinzhuhe",
            type: 'application'
          },
          {
            title: "长虹启思实验室：制造业生产协同及质量溯源方案",
            link: "application$application_manufacturing_changhong",
            type: 'application'
          },
          {
            title: "多企业间如何实现 “链上协同与治理”",
            link: "application$application_on-chain_collaboration_multiple_enterprises_jianxinzhuhe",
            type: 'application'
          },
          {
            title: "FISCO BCOS助力深圳破解网贷良性退出难题",
            link: "application$application_online_lending_platforms",
            type: 'application'
          },
          {
            title: "“人民版权”存证原创新闻超200万篇 | FISCO BCOS应用案例",
            link: "application$application_people_copyright",
            type: 'application'
          },
          {
            title: "区块链已革新哪些行业？附应用案例下载",
            link: "application$industry_application_case",
            type: 'application'
          },
          {
            title: "反常理，反直觉，区块链是怎样的一种“分布式系统”",
            link: "conception$distributed_system",
            type: 'conception'
          },
          {
            title: "一文说清“链上”和“链下”",
            link: "conception$on_and_off_the_blockchain",
            type: 'conception'
          },
          {
            title: "区块链上的交易真的是“点对点”吗？",
            link: "conception$point_to_point",
            type: 'conception'
          },
          {
            title: "怎样让你的区块链更加安全可控",
            link: "conception$safe_and_controllable",
            type: 'conception'
          },
          {
            title: "联盟链要对区块链做减法",
            link: "conception$simplify_blockchain",
            type: 'conception'
          },
          {
            title: "如何解释“我篡改了区块链”这个问题",
            link: "conception$the_truth_of_tampering",
            type: 'conception'
          },
          {
            title: "亲朋好友都能看懂的区块链",
            link: "conception$understandable_blockchain",
            type: 'conception'
          },
          {
            title: "区块链世界里不能信什么？",
            link: "conception$what_should_not_trust",
            type: 'conception'
          },
          {
            title: "说信任区块链时究竟在信任什么？",
            link: "conception$what_to_trust",
            type: 'conception'
          },
          {
            title: "区块链的速度困境：“贵”在信任，“慢”得其所",
            link: "conception$why_blockchain_slow",
            type: 'conception'
          },
          {
            title: "16大技巧快速实现高水准智能合约",
            link: "features$16skills_to_high-level_smart_contracts",
            type: 'features'
          },
          {
            title: "浅谈合约ABI",
            link: "features$abi_of_contract",
            type: 'features'
          },
          {
            title: "FISCO BCOS权限控制一览",
            link: "features$access_control_glance",
            type: 'features'
          },
          {
            title: "FISCO BCOS的AMOP使用介绍",
            link: "features$amop_introduction",
            type: 'features'
          },
          {
            title: "记一次CachedStorage中死锁的调试经历",
            link: "features$cachedstorage_deadlock_debug",
            type: 'features'
          },
          {
            title: "FISCO BCOS证书说明",
            link: "features$certificate_description",
            type: 'features'
          },
          {
            title: "《新摩登时代》：卓别林演绎共识与同步流程优化",
            link: "features$consensus_and_sync_process_optimization",
            type: 'features'
          },
          {
            title: "FISCO BCOS共识优化之路",
            link: "features$consensus_optimization",
            type: 'features'
          },
          {
            title: "存证&积分场景合约设计技巧与实例代码解析",
            link: "features$contract_design_practice_deposit&points_scene",
            type: 'features'
          },
          {
            title: "FISCO BCOS的CNS合约命名服务",
            link: "features$contract_name_service",
            type: 'features'
          },
          {
            title: "FISCO BCOS CRUD使用指南",
            link: "features$crud_guidance",
            type: 'features'
          },
          {
            title: "区块链性能腾飞：基于DAG的并行交易执行引擎",
            link: "features$dag-based_parallel_transaction_execution_engine",
            type: 'features'
          },
          {
            title: "区块链数据是存在链上还是数据库里？",
            link: "features$data_chain_or_database",
            type: 'features'
          },
          {
            title: "FISCO BCOS的落盘加密",
            link: "features$disk_encryption",
            type: 'features'
          },
          {
            title: "FISCO BCOS 2.0原理解析篇2： 分布式存储架构设计",
            link: "features$distributed_storage_design",
            type: 'features'
          },
          {
            title: "FISCO BCOS 2.0使用教程： 分布式存储体验",
            link: "features$distributed_storage_experience",
            type: 'features'
          },
          {
            title: "一个数字引发的探索——ECDSA解析",
            link: "features$ecdsa_analysis",
            type: 'features'
          },
          {
            title: "一场椭圆曲线的寻根问祖之旅",
            link: "features$elliptic_curve",
            type: 'features'
          },
          {
            title: "FISCO BCOS智能合约开发快速入门",
            link: "features$entry_quick_guide",
            type: 'features'
          },
          {
            title: "FISCO BCOS流量控制实现",
            link: "features$flow_control",
            type: 'features'
          },
          {
            title: "FISCO BCOS 2.0原理解析篇1： 群组架构的设计",
            link: "features$group_architecture_design",
            type: 'features'
          },
          {
            title: "FISCO BCOS 2.0使用教程篇1： 群组架构实操演练",
            link: "features$group_architecture_practice",
            type: 'features'
          },
          {
            title: "FISCO BCOS国密版部署示例",
            link: "features$national_cryptography_deployment_example",
            type: 'features'
          },
          {
            title: "FISCO BCOS的国密特性",
            link: "features$national_cryptography_features",
            type: 'features'
          },
          {
            title: "FISCO BCOS的网络压缩功能如何？",
            link: "features$network_compression",
            type: 'features'
          },
          {
            title: "FISCO BCOS网络端口讲解",
            link: "features$network_interface",
            type: 'features'
          },
          {
            title: "FISCO BCOS的外部账户生成",
            link: "features$outside_account_generation",
            type: 'features'
          },
          {
            title: "FISCO BCOS可并行合约开发框架（附实操教程）",
            link: "features$parallel_contract_development_framework_with_tutorials",
            type: 'features'
          },
          {
            title: "让木桶没有短板，FISCO BCOS全面推进并行化改造",
            link: "features$parallel_transformation",
            type: 'features'
          },
          {
            title: "FISCO BCOS的PBFT空块处理",
            link: "features$pbft_empty_block_processing",
            type: 'features'
          },
          {
            title: "FISCO BCOS性能优化——工具篇",
            link: "features$performance_optimization",
            type: 'features'
          },
          {
            title: "FISCO BCOS的速度与激情：性能优化方案最全解密",
            link: "features$performance_optimization_tools",
            type: 'features'
          },
          {
            title: "FISCO BCOS 2.0原理解析：预编译合约架构设计",
            link: "features$pre-compiled_contract_architecture_design",
            type: 'features'
          },
          {
            title: "预编译合约极速开发指南（附完整步骤+实操模板）",
            link: "features$pre-compiled_contract_rapid_development",
            type: 'features'
          },
          {
            title: "FISCO BCOS隐私特性：群/环签名技术实现",
            link: "features$privacy_protection_group_and_ring_signature",
            type: 'features'
          },
          {
            title: "链上密文参与计算？同态加密尽显神通 | FISCO BCOS隐私特性",
            link: "features$privacy_protection_homomorphic_encryption",
            type: 'features'
          },
          {
            title: "FISCO BCOS 角色权限模型的实现",
            link: "features$role_authority_model_realization",
            type: 'features'
          },
          {
            title: "我们为什么这样设计RPBFT？",
            link: "features$rpbft_design_analysis",
            type: 'features'
          },
          {
            title: "智能合约初探：概念与演变",
            link: "features$smart_contract_concept_and_evolution",
            type: 'features'
          },
          {
            title: "智能合约测试的技巧与实践",
            link: "features$smart_contract_test_practice",
            type: 'features'
          },
          {
            title: "如何优雅地编写智能合约",
            link: "features$smart_contract_write_elegantly",
            type: 'features'
          },
          {
            title: "智能合约编写之Solidity的高级特性",
            link: "features$solidity_advanced_features",
            type: 'features'
          },
          {
            title: "智能合约编写之Solidity的基础特性",
            link: "features$solidity_basic_features",
            type: 'features'
          },
          {
            title: "智能合约编写之 Solidity的设计模式",
            link: "features$solidity_design_patterns",
            type: 'features'
          },
          {
            title: "智能合约编写之Solidity的编程攻略",
            link: "features$solidity_design_programming_strategy",
            type: 'features'
          },
          {
            title: "智能合约编写之Solidity运行原理",
            link: "features$solidity_operation_principle",
            type: 'features'
          },
          {
            title: "深入浅出Solidity",
            link: "features$solidity_presensation",
            type: 'features'
          },
          {
            title: "FISCO BCOS基于表的存储结构",
            link: "features$storage_by_table_structure",
            type: 'features'
          },
          {
            title: "区块链的同步及其性能优化方法",
            link: "features$sync_and_its_performance_optimization",
            type: 'features'
          },
          {
            title: "FISCO BCOS同步模块的优化策略",
            link: "features$sync_optimization",
            type: 'features'
          },
          {
            title: "FISCO BCOS上使用第三方CA证书底层节点部署实操",
            link: "features$third-party-CA_node_deployment",
            type: 'features'
          },
          {
            title: "FISCO BCOS中交易的一生",
            link: "features$transaction_lifetime",
            type: 'features'
          },
          {
            title: "FISCO BCOS中交易池及其优化策略",
            link: "features$transaction_pool_optimization_strategy",
            type: 'features'
          },
          {
            title: "FISCO BCOS的TLS1.2握手流程",
            link: "features$tsl1.2_establish_process",
            type: 'features'
          },
          {
            title: "为什么从LevelDB切换到RocksDB？",
            link: "features$why_switch_to_rocksdb",
            type: 'features'
          },
          {
            title: "Ansible for FISCO BCOS + Webase-deploy 高效搭建企业级生产环境联盟链",
            link: "practice$ansible_FISCO-BCOS_Webase-deploy",
            type: "practice"
          },          
          {
            title: "基于wsl/wsl2的Windows-10搭建Fisco-Bcos区块链心得",
            link: "practice$build_chain_with_wsl_on_windows",
            type: "practice"
          },
          {
            title: "鲲鹏平台编译并运行FISCO-BCOS 2.6.0",
            link: "practice$kunpeng_platform_compiles_and_runs_fisco-bcos-2.6.0",
            type: "practice"
          },
          {
            title: "排除万难，从入门到精通区块链",
            link: "required$entry_to_master",
            type: "required"
          },
          {
            title: "带你读源码：四大视角多维走读区块链源码",
            link: "required$go_through_sourcecode",
            type: "required"
          },
          {
            title: "新人必读：区块链实用型技能树",
            link: "required$practical_skill_tree",
            type: "required"
          },
          {
            title: "FISCO BCOS权限控制一览",
            link: "tools$access_control_glance",
            type: "tools"
          },
          {
            title: "性能压测工具Caliper在FISCO BCOS平台中的实践",
            link: "tools$caliper_stress_test_practice",
            type: "tools"
          },
          {
            title: "FISCO BCOS 控制台详解，飞一般的区块链体验",
            link: "tools$console_details",
            type: "tools"
          },
          {
            title: "FISCO BCOS 交易解析工具指南",
            link: "tools$contract_analysis_tool_guide",
            type: "tools"
          },
          {
            title: "FISCO BCOS快速建链实现之路",
            link: "tools$fast_build_chain",
            type: "tools"
          },
          {
            title: "FISCO BCOS零基础入门，五步轻松构建应用",
            link: "tools$five_step_to_develop_application",
            type: "tools"
          },
          {
            title: "记一次JavaSDK性能从8000提升至30000的过程",
            link: "tools$javasdk_performance_improvement_8000-30000",
            type: "tools"
          },
          {
            title: "麻雀虽小五脏俱全 | 从Python-SDK谈谈FISCO BCOS多语言SDK",
            link: "tools$multilingual_sdk",
            type: "tools"
          },
          {
            title: "一文快速入门FISCO BCOS Node.js SDK",
            link: "tools$node.js_sdk_quick_start",
            type: "tools"
          },
          {
            title: "FISCO BCOS即拆即用的“Python区块链盒子”",
            link: "tools$python-sdk_origin_function_and_realization",
            type: "tools"
          },
          {
            title: "Python SDK的前世今生",
            link: "tools$python_blockchain_box",
            type: "tools"
          },
          {
            title: "杂谈Java合约代码",
            link: "tools$talking_about_java-contract-code",
            type: "tools"
          },
          {
            title: "手把手教你在Eclipse中使用JavaSDK",
            link: "tools$use_javasdk_in_eclipse",
            type: "tools"
          },
          {
            title: "在WeBASE的动物园漫步",
            link: "tools$walk_in_webase_zoo",
            type: "tools"
          },
          {
            title: "WeBASE数据导出：助力区块链大数据场景快速落地",
            link: "tools$webase-transaction",
            type: "tools"
          },
          {
            title: "WeBASE节点前置组件功能解析",
            link: "tools$webase_data_output",
            type: "tools"
          },
          {
            title: "FISCO BCOS迎来区块链中间件平台WeBASE，应用落地提速",
            link: "tools$webase_node_preposition",
            type: "tools"
          },
          {
            title: "漫谈WeBASE之交易两三事",
            link: "tools$webase_release",
            type: "tools"
          },
        ]
    },

 }
}