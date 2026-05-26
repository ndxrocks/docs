// This file is auto-generated. Do not edit directly.

export interface DocItem {
  title: string;
  href: string;
  items?: DocItem[];
}

export interface DocGroup {
  group: string;
  items: DocItem[];
}

export interface DocNavigation {
  [tabName: string]: DocGroup[];
}

export const docNavigation: DocNavigation = {
  "Home": [
    {
      "group": "Welcome",
      "items": [
        {
          "title": "Welcome to Kern",
          "href": "/docs"
        }
      ]
    },
    {
      "group": "Get Started",
      "items": [
        {
          "title": "Build Your First Agent",
          "href": "/docs/first-agent"
        },
        {
          "title": "Use Kern with Coding Agents",
          "href": "/docs/coding-agents"
        },
        {
          "title": "Build Your Agent Platform",
          "href": "/docs/agent-platform/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-platform/overview"
            },
            {
              "title": "Run Locally",
              "href": "/docs/agent-platform/run-local"
            },
            {
              "title": "Create an Agent",
              "href": "/docs/agent-platform/create-agent"
            },
            {
              "title": "Improve an Agent",
              "href": "/docs/agent-platform/improve-agent"
            },
            {
              "title": "Run on Railway",
              "href": "/docs/agent-platform/run-railway"
            },
            {
              "title": "Evals",
              "href": "/docs/agent-platform/evals"
            },
            {
              "title": "Next Steps",
              "href": "/docs/agent-platform/next-steps"
            }
          ]
        }
      ]
    },
    {
      "group": "Features",
      "items": [
        {
          "title": "Agent SDK",
          "href": "/docs/features/sdk"
        },
        {
          "title": "Agent Runtime",
          "href": "/docs/features/runtime"
        },
        {
          "title": "Agent API",
          "href": "/docs/features/api"
        },
        {
          "title": "Agent Storage",
          "href": "/docs/features/storage"
        },
        {
          "title": "Agent Observability",
          "href": "/docs/features/observability"
        },
        {
          "title": "Security & Auth",
          "href": "/docs/features/security-and-auth"
        },
        {
          "title": "Scheduling",
          "href": "/docs/features/scheduling"
        }
      ]
    },
    {
      "group": "Use Cases",
      "items": [
        {
          "title": "Data Labeling",
          "href": "/docs/use-cases/data-labeling/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/use-cases/data-labeling/overview"
            },
            {
              "title": "Data extraction",
              "href": "/docs/use-cases/data-labeling/structured-extraction"
            },
            {
              "title": "Classification and span labeling",
              "href": "/docs/use-cases/data-labeling/classification"
            },
            {
              "title": "LLM as judge",
              "href": "/docs/use-cases/data-labeling/llm-as-judge"
            },
            {
              "title": "Preference data for RLHF",
              "href": "/docs/use-cases/data-labeling/preference-data"
            },
            {
              "title": "Multimodal inputs",
              "href": "/docs/use-cases/data-labeling/multimodal-inputs"
            },
            {
              "title": "Quality pipeline",
              "href": "/docs/use-cases/data-labeling/quality-pipeline"
            }
          ]
        },
        {
          "title": "Product Copilots & Agents",
          "href": "/docs/use-cases/product-agents/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/use-cases/product-agents/overview"
            },
            {
              "title": "Serve as an API",
              "href": "/docs/use-cases/product-agents/serve-as-an-api"
            },
            {
              "title": "Sessions and memory",
              "href": "/docs/use-cases/product-agents/sessions-and-memory"
            },
            {
              "title": "Connecting your data",
              "href": "/docs/use-cases/product-agents/connecting-your-data"
            },
            {
              "title": "Interfaces",
              "href": "/docs/use-cases/product-agents/interfaces"
            },
            {
              "title": "Tutorial: Scout",
              "href": "/docs/tutorials/scout/overview",
              "items": [
                {
                  "title": "What is Scout?",
                  "href": "/docs/tutorials/scout/overview"
                },
                {
                  "title": "Setup",
                  "href": "/docs/tutorials/scout/setup"
                },
                {
                  "title": "Knowledge wiki and CRM",
                  "href": "/docs/tutorials/scout/knowledge-and-crm"
                },
                {
                  "title": "Connect to Slack",
                  "href": "/docs/tutorials/scout/connect-slack"
                },
                {
                  "title": "Connect Google Drive",
                  "href": "/docs/tutorials/scout/connect-google-drive"
                },
                {
                  "title": "Connect MCP servers",
                  "href": "/docs/tutorials/scout/connect-mcp-servers"
                },
                {
                  "title": "Deploy to Railway",
                  "href": "/docs/tutorials/scout/deploy-to-railway"
                }
              ]
            }
          ]
        },
        {
          "title": "Data & Analytics Agents",
          "href": "/docs/use-cases/data-agents/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/use-cases/data-agents/overview"
            },
            {
              "title": "Querying your data",
              "href": "/docs/use-cases/data-agents/querying-your-data"
            },
            {
              "title": "Grounding in context",
              "href": "/docs/use-cases/data-agents/grounding-in-context"
            },
            {
              "title": "Self-correcting agents",
              "href": "/docs/use-cases/data-agents/self-correcting-agents"
            },
            {
              "title": "Safe data access",
              "href": "/docs/use-cases/data-agents/safe-data-access"
            },
            {
              "title": "Materialization",
              "href": "/docs/use-cases/data-agents/materialization"
            },
            {
              "title": "Serve and embed",
              "href": "/docs/use-cases/data-agents/serve-and-embed"
            },
            {
              "title": "Tutorial: Dash",
              "href": "/docs/tutorials/dash/overview",
              "items": [
                {
                  "title": "What is Dash?",
                  "href": "/docs/tutorials/dash/overview"
                },
                {
                  "title": "Setup",
                  "href": "/docs/tutorials/dash/setup"
                },
                {
                  "title": "Connect to Slack",
                  "href": "/docs/tutorials/dash/connect-slack"
                },
                {
                  "title": "Deploy to Railway",
                  "href": "/docs/tutorials/dash/deploy-to-railway"
                },
                {
                  "title": "Next Steps",
                  "href": "/docs/tutorials/dash/next-steps"
                }
              ]
            }
          ]
        },
        {
          "title": "Deep Research & Analysis",
          "href": "/docs/use-cases/deep-research/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/use-cases/deep-research/overview"
            },
            {
              "title": "Orchestration patterns",
              "href": "/docs/use-cases/deep-research/orchestration-patterns"
            },
            {
              "title": "Parallel investigation",
              "href": "/docs/use-cases/deep-research/parallel-investigation"
            },
            {
              "title": "Grounding research",
              "href": "/docs/use-cases/deep-research/grounding-research"
            },
            {
              "title": "Structured deliverable",
              "href": "/docs/use-cases/deep-research/structured-deliverable"
            },
            {
              "title": "Institutional learning",
              "href": "/docs/use-cases/deep-research/institutional-learning"
            },
            {
              "title": "Serve and embed",
              "href": "/docs/use-cases/deep-research/serve-and-embed"
            }
          ]
        },
        {
          "title": "Document Processing",
          "href": "/docs/use-cases/document-processing/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/use-cases/document-processing/overview"
            },
            {
              "title": "Invoices and receipts",
              "href": "/docs/use-cases/document-processing/invoices-and-receipts"
            },
            {
              "title": "Contracts",
              "href": "/docs/use-cases/document-processing/contracts"
            },
            {
              "title": "Forms and intake",
              "href": "/docs/use-cases/document-processing/forms-and-intake"
            },
            {
              "title": "Batch and durability",
              "href": "/docs/use-cases/document-processing/batch-and-durability"
            },
            {
              "title": "Human routing and eval",
              "href": "/docs/use-cases/document-processing/human-routing-and-eval"
            }
          ]
        }
      ]
    }
  ],
  "SDK": [
    {
      "group": "Get Started",
      "items": [
        {
          "title": "Introduction",
          "href": "/docs/sdk/introduction"
        },
        {
          "title": "Install & Setup",
          "href": "/docs/sdk/setup"
        }
      ]
    },
    {
      "group": "Visualization",
      "items": [
        {
          "title": "Visualization & Response Display",
          "href": "/docs/visualization"
        }
      ]
    },
    {
      "group": "Basics",
      "items": [
        {
          "title": "Agents",
          "href": "/docs/agents/overview",
          "items": [
            {
              "title": "What are Agents?",
              "href": "/docs/agents/overview"
            },
            {
              "title": "Building Agents",
              "href": "/docs/agents/building-agents"
            },
            {
              "title": "Running Agents",
              "href": "/docs/agents/running-agents"
            },
            {
              "title": "Debugging Agents",
              "href": "/docs/agents/debugging-agents"
            },
            {
              "title": "Usage",
              "href": "/docs/agents/usage/agent-with-tools",
              "items": [
                {
                  "title": "Agent with Tools",
                  "href": "/docs/agents/usage/agent-with-tools"
                },
                {
                  "title": "Structured Output",
                  "href": "/docs/agents/usage/agent-with-structured-output"
                },
                {
                  "title": "Agent with Storage",
                  "href": "/docs/agents/usage/agent-with-storage"
                },
                {
                  "title": "Agent with Memory",
                  "href": "/docs/agents/usage/agent-with-memory"
                },
                {
                  "title": "Agent with Knowledge",
                  "href": "/docs/agents/usage/agent-with-knowledge"
                },
                {
                  "title": "Followup Suggestions",
                  "href": "/docs/agents/usage/agent-with-followup-suggestions"
                }
              ]
            }
          ]
        },
        {
          "title": "Teams",
          "href": "/docs/teams/overview",
          "items": [
            {
              "title": "What are Teams?",
              "href": "/docs/teams/overview"
            },
            {
              "title": "Building Teams",
              "href": "/docs/teams/building-teams"
            },
            {
              "title": "Running Teams",
              "href": "/docs/teams/running-teams"
            },
            {
              "title": "Delegation",
              "href": "/docs/teams/delegation"
            },
            {
              "title": "Debugging Teams",
              "href": "/docs/teams/debugging-teams"
            },
            {
              "title": "Usage",
              "href": "/docs/teams/usage/basic-team",
              "items": [
                {
                  "title": "Basic Team",
                  "href": "/docs/teams/usage/basic-team"
                },
                {
                  "title": "Streaming",
                  "href": "/docs/teams/usage/streaming"
                },
                {
                  "title": "Direct Response",
                  "href": "/docs/teams/usage/respond-directly"
                },
                {
                  "title": "Followup Suggestions",
                  "href": "/docs/teams/usage/team-with-followup-suggestions"
                }
              ]
            }
          ]
        },
        {
          "title": "Workflows",
          "href": "/docs/workflows/overview",
          "items": [
            {
              "title": "What are Workflows?",
              "href": "/docs/workflows/overview"
            },
            {
              "title": "Building Workflows",
              "href": "/docs/workflows/building-workflows"
            },
            {
              "title": "Running Workflows",
              "href": "/docs/workflows/running-workflows"
            },
            {
              "title": "Workflow Patterns",
              "href": "/docs/workflows/workflow-patterns/overview",
              "items": [
                {
                  "title": "Development Guide",
                  "href": "/docs/workflows/workflow-patterns/overview"
                },
                {
                  "title": "Sequential Workflows",
                  "href": "/docs/workflows/workflow-patterns/sequential"
                },
                {
                  "title": "Fully Python Workflow",
                  "href": "/docs/workflows/workflow-patterns/fully-python-workflow"
                },
                {
                  "title": "Step-Based Workflows",
                  "href": "/docs/workflows/workflow-patterns/step-based-workflow"
                },
                {
                  "title": "Custom Functions in Workflows",
                  "href": "/docs/workflows/workflow-patterns/custom-function-step-workflow"
                },
                {
                  "title": "Conditional Workflow",
                  "href": "/docs/workflows/workflow-patterns/conditional-workflow"
                },
                {
                  "title": "Parallel Workflow",
                  "href": "/docs/workflows/workflow-patterns/parallel-workflow"
                },
                {
                  "title": "Iterative Workflow",
                  "href": "/docs/workflows/workflow-patterns/iterative-workflow"
                },
                {
                  "title": "Branching Workflow",
                  "href": "/docs/workflows/workflow-patterns/branching-workflow"
                },
                {
                  "title": "Grouped Steps Workflow",
                  "href": "/docs/workflows/workflow-patterns/grouped-steps-workflow"
                },
                {
                  "title": "Nested Workflow",
                  "href": "/docs/workflows/workflow-patterns/nested-workflow"
                },
                {
                  "title": "Advanced Workflow Patterns",
                  "href": "/docs/workflows/workflow-patterns/advanced-workflow-patterns"
                }
              ]
            },
            {
              "title": "Human-in-the-Loop",
              "href": "/docs/workflows/hitl/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/workflows/hitl/overview"
                },
                {
                  "title": "HumanReview Config",
                  "href": "/docs/workflows/hitl/human-review"
                },
                {
                  "title": "Step",
                  "href": "/docs/workflows/hitl/step"
                },
                {
                  "title": "Executor",
                  "href": "/docs/workflows/hitl/executor"
                },
                {
                  "title": "Nested",
                  "href": "/docs/workflows/hitl/nested"
                },
                {
                  "title": "Pause Anatomy",
                  "href": "/docs/workflows/hitl/pause-anatomy"
                },
                {
                  "title": "Output Review",
                  "href": "/docs/workflows/hitl/output-review"
                },
                {
                  "title": "Router",
                  "href": "/docs/workflows/hitl/router"
                },
                {
                  "title": "Condition",
                  "href": "/docs/workflows/hitl/condition"
                },
                {
                  "title": "Loop",
                  "href": "/docs/workflows/hitl/loop"
                },
                {
                  "title": "Steps (Pipeline)",
                  "href": "/docs/workflows/hitl/steps"
                },
                {
                  "title": "Timeout",
                  "href": "/docs/workflows/hitl/timeout"
                },
                {
                  "title": "Error Handling",
                  "href": "/docs/workflows/hitl/error-handling"
                }
              ]
            },
            {
              "title": "Passing Additional Data",
              "href": "/docs/workflows/additional-data"
            },
            {
              "title": "Conversational Workflows",
              "href": "/docs/workflows/conversational-workflows"
            },
            {
              "title": "Accessing Previous Steps",
              "href": "/docs/workflows/access-previous-steps"
            },
            {
              "title": "Early Stopping",
              "href": "/docs/workflows/early-stop"
            },
            {
              "title": "Execute Workflow from an Agent",
              "href": "/docs/workflows/workflow-tools"
            },
            {
              "title": "Background Execution",
              "href": "/docs/workflows/background-execution"
            },
            {
              "title": "Usage",
              "href": "/docs/workflows/usage/sequence-of-steps",
              "items": [
                {
                  "title": "Core Patterns",
                  "href": "/docs/workflows/usage/sequence-of-steps",
                  "items": [
                    {
                      "title": "Sequential",
                      "href": "/docs/workflows/usage/sequence-of-steps"
                    },
                    {
                      "title": "Parallel",
                      "href": "/docs/workflows/usage/parallel-steps-workflow"
                    },
                    {
                      "title": "Conditional",
                      "href": "/docs/workflows/usage/condition-steps-workflow-stream"
                    },
                    {
                      "title": "Loop Steps Workflow",
                      "href": "/docs/workflows/usage/loop-steps-workflow"
                    },
                    {
                      "title": "Loop Iterative Accumulation",
                      "href": "/docs/workflows/usage/loop-iterative-accumulation"
                    },
                    {
                      "title": "Conditional Branching Workflow",
                      "href": "/docs/workflows/usage/router-steps-workflow"
                    }
                  ]
                },
                {
                  "title": "Custom Execution",
                  "href": "/docs/workflows/usage/step-with-function",
                  "items": [
                    {
                      "title": "Step with function",
                      "href": "/docs/workflows/usage/step-with-function"
                    },
                    {
                      "title": "Function instead of steps",
                      "href": "/docs/workflows/usage/function-instead-of-steps"
                    },
                    {
                      "title": "Class-based Executor",
                      "href": "/docs/workflows/usage/class-based-executor"
                    }
                  ]
                },
                {
                  "title": "Advanced Combinations",
                  "href": "/docs/workflows/usage/condition-with-list-of-steps",
                  "items": [
                    {
                      "title": "Condition with list of steps",
                      "href": "/docs/workflows/usage/condition-with-list-of-steps"
                    },
                    {
                      "title": "Loop with Parallel Steps Workflow",
                      "href": "/docs/workflows/usage/loop-with-parallel-steps-stream"
                    },
                    {
                      "title": "Condition and Parallel Steps Workflow",
                      "href": "/docs/workflows/usage/condition-and-parallel-steps-stream"
                    },
                    {
                      "title": "Router with Loop Steps",
                      "href": "/docs/workflows/usage/router-with-loop-steps"
                    },
                    {
                      "title": "Router with Step Choices",
                      "href": "/docs/workflows/usage/router-with-step-choices"
                    }
                  ]
                },
                {
                  "title": "Data & I/O",
                  "href": "/docs/workflows/usage/access-multiple-previous-steps-output",
                  "items": [
                    {
                      "title": "Access Multiple Previous Steps Output",
                      "href": "/docs/workflows/usage/access-multiple-previous-steps-output"
                    },
                    {
                      "title": "Step with Function using Additional Data",
                      "href": "/docs/workflows/usage/step-with-function-additional-data"
                    },
                    {
                      "title": "Structured I/O",
                      "href": "/docs/workflows/usage/structured-io-at-each-step-level"
                    },
                    {
                      "title": "Workflow with Input Schema Validation",
                      "href": "/docs/workflows/usage/workflow-with-input-schema"
                    }
                  ]
                },
                {
                  "title": "Production Features",
                  "href": "/docs/workflows/usage/basic-workflow-agent",
                  "items": [
                    {
                      "title": "Basic Conversational Workflow",
                      "href": "/docs/workflows/usage/basic-workflow-agent"
                    },
                    {
                      "title": "Early Stop a Workflow",
                      "href": "/docs/workflows/usage/early-stop-workflow"
                    },
                    {
                      "title": "Workflow Cancellation",
                      "href": "/docs/workflows/usage/workflow-cancellation"
                    },
                    {
                      "title": "Async Events Streaming",
                      "href": "/docs/workflows/usage/async-events-streaming"
                    },
                    {
                      "title": "Store Events and Events to Skip in a Workflow",
                      "href": "/docs/workflows/usage/store-events-and-events-to-skip-in-a-workflow"
                    },
                    {
                      "title": "Step with custom function streaming on AgentOS",
                      "href": "/docs/workflows/usage/step-with-function-streaming-agentos"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Input & Output",
          "href": "/docs/input-output/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/input-output/overview"
            },
            {
              "title": "Structured Input",
              "href": "/docs/input-output/structured-input/agent",
              "items": [
                {
                  "title": "Agent",
                  "href": "/docs/input-output/structured-input/agent"
                },
                {
                  "title": "Team",
                  "href": "/docs/input-output/structured-input/team"
                }
              ]
            },
            {
              "title": "Structured Output",
              "href": "/docs/input-output/structured-output/agent",
              "items": [
                {
                  "title": "Agent Output",
                  "href": "/docs/input-output/structured-output/agent"
                },
                {
                  "title": "Team",
                  "href": "/docs/input-output/structured-output/team"
                }
              ]
            },
            {
              "title": "Multimodal I/O",
              "href": "/docs/input-output/multimodal"
            },
            {
              "title": "Output Model",
              "href": "/docs/input-output/output-model"
            }
          ]
        },
        {
          "title": "Database",
          "href": "/docs/database/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/database/overview"
            },
            {
              "title": "Chat History",
              "href": "/docs/database/chat-history"
            },
            {
              "title": "Session Storage",
              "href": "/docs/database/session-storage"
            },
            {
              "title": "Supported Databases",
              "href": "/docs/database/providers/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/overview"
                },
                {
                  "title": "PostgreSQL",
                  "href": "/docs/database/providers/postgres/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/postgres/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/postgres/usage/postgres-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/postgres/usage/postgres-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/postgres/usage/postgres-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/postgres/usage/postgres-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Async PostgreSQL",
                  "href": "/docs/database/providers/async-postgres/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/async-postgres/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "MySQL",
                  "href": "/docs/database/providers/mysql/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/mysql/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/mysql/usage/mysql-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/mysql/usage/mysql-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/mysql/usage/mysql-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/mysql/usage/mysql-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Async MySQL",
                  "href": "/docs/database/providers/async-mysql/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/async-mysql/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-agent",
                      "items": [
                        {
                          "title": "Agent with AsyncDb",
                          "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-agent"
                        },
                        {
                          "title": "Team with AsyncDb",
                          "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-team"
                        },
                        {
                          "title": "Workflow with AsyncDb",
                          "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "SQLite",
                  "href": "/docs/database/providers/sqlite/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/sqlite/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/sqlite/usage/sqlite-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/sqlite/usage/sqlite-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/sqlite/usage/sqlite-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/sqlite/usage/sqlite-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Async SQLite",
                  "href": "/docs/database/providers/async-sqlite/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/async-sqlite/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "In-Memory",
                  "href": "/docs/database/providers/in-memory/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/in-memory/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/in-memory/usage/in-memory-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/in-memory/usage/in-memory-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/in-memory/usage/in-memory-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/in-memory/usage/in-memory-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "DynamoDB",
                  "href": "/docs/database/providers/dynamodb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/dynamodb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "MongoDB",
                  "href": "/docs/database/providers/mongo/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/mongo/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/mongo/usage/mongodb-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/mongo/usage/mongodb-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/mongo/usage/mongodb-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/mongo/usage/mongodb-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Async MongoDB",
                  "href": "/docs/database/providers/async-mongo/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/async-mongo/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "JSON",
                  "href": "/docs/database/providers/json/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/json/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/json/usage/json-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/json/usage/json-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/json/usage/json-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/json/usage/json-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Singlestore",
                  "href": "/docs/database/providers/singlestore/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/singlestore/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/singlestore/usage/singlestore-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/singlestore/usage/singlestore-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/singlestore/usage/singlestore-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/singlestore/usage/singlestore-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "SurrealDB",
                  "href": "/docs/database/providers/surrealdb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/surrealdb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Redis",
                  "href": "/docs/database/providers/redis/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/redis/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/redis/usage/redis-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/redis/usage/redis-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/redis/usage/redis-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/redis/usage/redis-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "GCS",
                  "href": "/docs/database/providers/gcs/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/gcs/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/gcs/usage/gcs-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/gcs/usage/gcs-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/gcs/usage/gcs-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/gcs/usage/gcs-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Firestore",
                  "href": "/docs/database/providers/firestore/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/firestore/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/database/providers/firestore/usage/firestore-for-agent",
                      "items": [
                        {
                          "title": "Agent",
                          "href": "/docs/database/providers/firestore/usage/firestore-for-agent"
                        },
                        {
                          "title": "Team",
                          "href": "/docs/database/providers/firestore/usage/firestore-for-team"
                        },
                        {
                          "title": "Workflow",
                          "href": "/docs/database/providers/firestore/usage/firestore-for-workflow"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Supabase",
                  "href": "/docs/database/providers/supabase/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/supabase/overview"
                    }
                  ]
                },
                {
                  "title": "Neon",
                  "href": "/docs/database/providers/neon/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/database/providers/neon/overview"
                    }
                  ]
                },
                {
                  "title": "Custom Tables",
                  "href": "/docs/database/providers/selecting-tables"
                }
              ]
            }
          ]
        },
        {
          "title": "Memory",
          "href": "/docs/memory/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/memory/overview"
            },
            {
              "title": "Working with Memories",
              "href": "/docs/memory/working-with-memories/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/memory/working-with-memories/overview"
                },
                {
                  "title": "Memory Optimization",
                  "href": "/docs/memory/working-with-memories/memory-optimization"
                },
                {
                  "title": "Usage",
                  "href": "/docs/memory/working-with-memories/mongodb-memory",
                  "items": [
                    {
                      "title": "Storage Usage",
                      "href": "/docs/memory/working-with-memories/mongodb-memory",
                      "items": [
                        {
                          "title": "Memory with MongoDB",
                          "href": "/docs/memory/working-with-memories/mongodb-memory"
                        },
                        {
                          "title": "Memory with PostgreSQL",
                          "href": "/docs/memory/working-with-memories/postgres-memory"
                        },
                        {
                          "title": "Memory with SQLite",
                          "href": "/docs/memory/working-with-memories/sqlite-memory"
                        },
                        {
                          "title": "Memory with Redis",
                          "href": "/docs/memory/working-with-memories/redis-memory"
                        }
                      ]
                    },
                    {
                      "title": "Memory Manager Usage",
                      "href": "/docs/memory/working-with-memories/standalone-memory",
                      "items": [
                        {
                          "title": "Standalone Memory",
                          "href": "/docs/memory/working-with-memories/standalone-memory"
                        },
                        {
                          "title": "Memory Creation",
                          "href": "/docs/memory/working-with-memories/memory-creation"
                        },
                        {
                          "title": "Custom Memory Instructions",
                          "href": "/docs/memory/working-with-memories/custom-memory-instructions"
                        },
                        {
                          "title": "Memory Search",
                          "href": "/docs/memory/working-with-memories/memory-search"
                        },
                        {
                          "title": "Memory Optimization",
                          "href": "/docs/memory/working-with-memories/memory-optimization"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Agents with Memory",
              "href": "/docs/memory/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/memory/agent/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/memory/agent/agent-with-memory",
                  "items": [
                    {
                      "title": "Agent with Memory",
                      "href": "/docs/memory/agent/agent-with-memory"
                    },
                    {
                      "title": "Agentic Memory",
                      "href": "/docs/memory/agent/agentic-memory"
                    },
                    {
                      "title": "Share Memory between Agents",
                      "href": "/docs/memory/agent/agents-share-memory"
                    },
                    {
                      "title": "Custom Memory Manager",
                      "href": "/docs/memory/agent/custom-memory-manager"
                    },
                    {
                      "title": "Multi-user, Multi-session Chat",
                      "href": "/docs/memory/agent/multi-user-multi-session-chat"
                    },
                    {
                      "title": "Multi-User, Multi-Session Chat Concurrently",
                      "href": "/docs/memory/agent/multi-user-multi-session-chat-concurrent"
                    },
                    {
                      "title": "Share Memory and History between Agents",
                      "href": "/docs/memory/agent/share-memory-and-history-between-agents"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Teams with Memory",
              "href": "/docs/memory/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/memory/team/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/memory/team/team-with-memory-manager",
                  "items": [
                    {
                      "title": "Team with Memory Manager",
                      "href": "/docs/memory/team/team-with-memory-manager"
                    },
                    {
                      "title": "Team with Agentic Memory",
                      "href": "/docs/memory/team/team-with-agentic-memory"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Best Practices",
              "href": "/docs/memory/best-practices"
            }
          ]
        },
        {
          "title": "Knowledge",
          "href": "/docs/knowledge/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/knowledge/overview"
            },
            {
              "title": "Quickstart",
              "href": "/docs/knowledge/quickstart"
            },
            {
              "title": "Concepts",
              "href": "/docs/knowledge/concepts/vector-db",
              "items": [
                {
                  "title": "Vector DB",
                  "href": "/docs/knowledge/concepts/vector-db"
                },
                {
                  "title": "Contents DB",
                  "href": "/docs/knowledge/concepts/contents-db"
                },
                {
                  "title": "Search & Retrieval",
                  "href": "/docs/knowledge/concepts/search-and-retrieval/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/overview"
                    },
                    {
                      "title": "Hybrid Search",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/hybrid-search"
                    },
                    {
                      "title": "Vector Search",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/vector-search"
                    },
                    {
                      "title": "Keyword Search",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/keyword-search"
                    },
                    {
                      "title": "Agentic RAG with Reranking",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/agentic-rag"
                    },
                    {
                      "title": "Custom Retriever",
                      "href": "/docs/knowledge/concepts/search-and-retrieval/custom-retriever"
                    }
                  ]
                },
                {
                  "title": "Readers",
                  "href": "/docs/knowledge/concepts/readers/overview"
                },
                {
                  "title": "Chunking",
                  "href": "/docs/knowledge/concepts/chunking/overview"
                },
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/concepts/embedder/overview"
                },
                {
                  "title": "Filtering",
                  "href": "/docs/knowledge/concepts/filters/overview"
                },
                {
                  "title": "Isolate Vector Search",
                  "href": "/docs/knowledge/concepts/isolate-vector-search"
                },
                {
                  "title": "Cloud Storage Sources",
                  "href": "/docs/knowledge/concepts/cloud-storage"
                }
              ]
            },
            {
              "title": "Usage",
              "href": "/docs/knowledge/agents/overview",
              "items": [
                {
                  "title": "Agents",
                  "href": "/docs/knowledge/agents/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/agents/overview"
                    },
                    {
                      "title": "Agentic RAG with LanceDB",
                      "href": "/docs/knowledge/agents/agentic-rag-lancedb"
                    },
                    {
                      "title": "Agentic RAG with PgVector",
                      "href": "/docs/knowledge/agents/agentic-rag-pgvector"
                    },
                    {
                      "title": "Traditional RAG with LanceDB",
                      "href": "/docs/knowledge/agents/traditional-rag-lancedb"
                    },
                    {
                      "title": "Traditional RAG with PgVector",
                      "href": "/docs/knowledge/agents/traditional-rag-pgvector"
                    }
                  ]
                },
                {
                  "title": "Teams",
                  "href": "/docs/knowledge/teams/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/teams/overview"
                    },
                    {
                      "title": "Team with Knowledge Base",
                      "href": "/docs/knowledge/teams/team-with-knowledge"
                    },
                    {
                      "title": "Distributed RAG with PgVector",
                      "href": "/docs/knowledge/teams/distributed-rag-pgvector"
                    },
                    {
                      "title": "Distributed RAG with LanceDB",
                      "href": "/docs/knowledge/teams/distributed-rag-lancedb"
                    }
                  ]
                },
                {
                  "title": "Readers",
                  "href": "/docs/knowledge/concepts/readers/pdf-reader",
                  "items": [
                    {
                      "title": "PDF Reader",
                      "href": "/docs/knowledge/concepts/readers/pdf-reader"
                    },
                    {
                      "title": "Docling Reader",
                      "href": "/docs/knowledge/concepts/readers/docling-reader"
                    },
                    {
                      "title": "CSV Reader",
                      "href": "/docs/knowledge/concepts/readers/csv-reader"
                    },
                    {
                      "title": "JSON Reader",
                      "href": "/docs/knowledge/concepts/readers/json-reader"
                    },
                    {
                      "title": "Markdown Reader",
                      "href": "/docs/knowledge/concepts/readers/markdown-reader"
                    },
                    {
                      "title": "Website Reader",
                      "href": "/docs/knowledge/concepts/readers/website-reader"
                    },
                    {
                      "title": "LLMs.txt Reader",
                      "href": "/docs/knowledge/concepts/readers/llms-txt-reader"
                    },
                    {
                      "title": "YouTube Reader",
                      "href": "/docs/knowledge/concepts/readers/youtube-reader"
                    }
                  ]
                },
                {
                  "title": "Chunkers",
                  "href": "/docs/knowledge/concepts/chunking/fixed-size-chunking",
                  "items": [
                    {
                      "title": "Fixed Size Chunking",
                      "href": "/docs/knowledge/concepts/chunking/fixed-size-chunking"
                    },
                    {
                      "title": "Semantic Chunking",
                      "href": "/docs/knowledge/concepts/chunking/semantic-chunking"
                    },
                    {
                      "title": "Recursive Chunking",
                      "href": "/docs/knowledge/concepts/chunking/recursive-chunking"
                    },
                    {
                      "title": "Document Chunking",
                      "href": "/docs/knowledge/concepts/chunking/document-chunking"
                    },
                    {
                      "title": "CSV Row Chunking",
                      "href": "/docs/knowledge/concepts/chunking/csv-row-chunking"
                    },
                    {
                      "title": "Markdown Chunking",
                      "href": "/docs/knowledge/concepts/chunking/markdown-chunking"
                    },
                    {
                      "title": "Agentic Chunking",
                      "href": "/docs/knowledge/concepts/chunking/agentic-chunking"
                    },
                    {
                      "title": "Code Chunking",
                      "href": "/docs/knowledge/concepts/chunking/code-chunking"
                    },
                    {
                      "title": "Custom Chunking",
                      "href": "/docs/knowledge/concepts/chunking/custom-chunking"
                    }
                  ]
                },
                {
                  "title": "Embedders",
                  "href": "/docs/knowledge/concepts/embedder/openai/openai-embedder",
                  "items": [
                    {
                      "title": "OpenAI Embedder",
                      "href": "/docs/knowledge/concepts/embedder/openai/openai-embedder"
                    },
                    {
                      "title": "Cohere Embedder",
                      "href": "/docs/knowledge/concepts/embedder/cohere/cohere-embedder"
                    },
                    {
                      "title": "Gemini Embedder",
                      "href": "/docs/knowledge/concepts/embedder/gemini/gemini-embedder"
                    },
                    {
                      "title": "Ollama Embedder",
                      "href": "/docs/knowledge/concepts/embedder/ollama/ollama-embedder"
                    },
                    {
                      "title": "Mistral Embedder",
                      "href": "/docs/knowledge/concepts/embedder/mistral/mistral-embedder"
                    },
                    {
                      "title": "VoyageAI Embedder",
                      "href": "/docs/knowledge/concepts/embedder/voyageai/voyageai-embedder"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Vector Stores",
              "href": "/docs/knowledge/vector-stores/index",
              "items": [
                {
                  "title": "Index",
                  "href": "/docs/knowledge/vector-stores/index"
                },
                {
                  "title": "PgVector",
                  "href": "/docs/knowledge/vector-stores/pgvector/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/pgvector/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-db",
                      "items": [
                        {
                          "title": "PgVector",
                          "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-db"
                        },
                        {
                          "title": "PgVector Async",
                          "href": "/docs/knowledge/vector-stores/pgvector/usage/async-pgvector-db"
                        },
                        {
                          "title": "PgVector Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LanceDB",
                  "href": "/docs/knowledge/vector-stores/lancedb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/lancedb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db",
                      "items": [
                        {
                          "title": "LanceDB",
                          "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db"
                        },
                        {
                          "title": "LanceDB Async",
                          "href": "/docs/knowledge/vector-stores/lancedb/usage/async-lance-db"
                        },
                        {
                          "title": "LanceDB Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Pinecone",
                  "href": "/docs/knowledge/vector-stores/pinecone/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/pinecone/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/pinecone/usage/pinecone-db",
                      "items": [
                        {
                          "title": "Pinecone",
                          "href": "/docs/knowledge/vector-stores/pinecone/usage/pinecone-db"
                        },
                        {
                          "title": "Pinecone Async",
                          "href": "/docs/knowledge/vector-stores/pinecone/usage/async-pinecone-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Qdrant",
                  "href": "/docs/knowledge/vector-stores/qdrant/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/qdrant/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db",
                      "items": [
                        {
                          "title": "Qdrant",
                          "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db"
                        },
                        {
                          "title": "Qdrant Async",
                          "href": "/docs/knowledge/vector-stores/qdrant/usage/async-qdrant-db"
                        },
                        {
                          "title": "Qdrant Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Chroma",
                  "href": "/docs/knowledge/vector-stores/chroma/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/chroma/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-db",
                      "items": [
                        {
                          "title": "ChromaDB",
                          "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-db"
                        },
                        {
                          "title": "ChromaDB Async",
                          "href": "/docs/knowledge/vector-stores/chroma/usage/async-chroma-db"
                        },
                        {
                          "title": "Chroma Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Milvus",
                  "href": "/docs/knowledge/vector-stores/milvus/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/milvus/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db",
                      "items": [
                        {
                          "title": "Milvus",
                          "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db"
                        },
                        {
                          "title": "Milvus Async",
                          "href": "/docs/knowledge/vector-stores/milvus/usage/async-milvus-db"
                        },
                        {
                          "title": "Milvus Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db-hybrid-search"
                        },
                        {
                          "title": "Milvus Async Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/milvus/usage/async-milvus-db-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Weaviate",
                  "href": "/docs/knowledge/vector-stores/weaviate/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/weaviate/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db",
                      "items": [
                        {
                          "title": "Weaviate",
                          "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db"
                        },
                        {
                          "title": "Weaviate Async",
                          "href": "/docs/knowledge/vector-stores/weaviate/usage/async-weaviate-db"
                        },
                        {
                          "title": "Weaviate Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Couchbase",
                  "href": "/docs/knowledge/vector-stores/couchbase/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/couchbase/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/couchbase/usage/couchbase-db",
                      "items": [
                        {
                          "title": "Couchbase",
                          "href": "/docs/knowledge/vector-stores/couchbase/usage/couchbase-db"
                        },
                        {
                          "title": "Couchbase Async",
                          "href": "/docs/knowledge/vector-stores/couchbase/usage/async-couchbase-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Cassandra",
                  "href": "/docs/knowledge/vector-stores/cassandra/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/cassandra/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/cassandra/usage/cassandra-db",
                      "items": [
                        {
                          "title": "Cassandra",
                          "href": "/docs/knowledge/vector-stores/cassandra/usage/cassandra-db"
                        },
                        {
                          "title": "Cassandra Async",
                          "href": "/docs/knowledge/vector-stores/cassandra/usage/async-cassandra-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Clickhouse",
                  "href": "/docs/knowledge/vector-stores/clickhouse/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/clickhouse/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/clickhouse/usage/clickhouse-db",
                      "items": [
                        {
                          "title": "ClickHouse",
                          "href": "/docs/knowledge/vector-stores/clickhouse/usage/clickhouse-db"
                        },
                        {
                          "title": "ClickHouse Async",
                          "href": "/docs/knowledge/vector-stores/clickhouse/usage/async-clickhouse-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Singlestore",
                  "href": "/docs/knowledge/vector-stores/singlestore/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/singlestore/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/singlestore/usage/singlestore-db",
                      "items": [
                        {
                          "title": "SingleStore",
                          "href": "/docs/knowledge/vector-stores/singlestore/usage/singlestore-db"
                        },
                        {
                          "title": "SingleStore Async",
                          "href": "/docs/knowledge/vector-stores/singlestore/usage/async-singlestore-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Redis",
                  "href": "/docs/knowledge/vector-stores/redis/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/redis/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/redis/usage/redis-db",
                      "items": [
                        {
                          "title": "Redis",
                          "href": "/docs/knowledge/vector-stores/redis/usage/redis-db"
                        },
                        {
                          "title": "Redis Async",
                          "href": "/docs/knowledge/vector-stores/redis/usage/async-redis-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "MongoDB",
                  "href": "/docs/knowledge/vector-stores/mongodb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/mongodb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db",
                      "items": [
                        {
                          "title": "MongoDB",
                          "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db"
                        },
                        {
                          "title": "MongoDB Async",
                          "href": "/docs/knowledge/vector-stores/mongodb/usage/async-mongo-db"
                        },
                        {
                          "title": "MongoDB Hybrid Search",
                          "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db-hybrid-search"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Azure Cosmos DB MongoDB vCore",
                  "href": "/docs/knowledge/vector-stores/azure_cosmos_mongodb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/azure_cosmos_mongodb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs",
                      "items": []
                    }
                  ]
                },
                {
                  "title": "SurrealDB",
                  "href": "/docs/knowledge/vector-stores/surrealdb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/surrealdb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/surrealdb/usage/surreal-db",
                      "items": [
                        {
                          "title": "SurrealDB",
                          "href": "/docs/knowledge/vector-stores/surrealdb/usage/surreal-db"
                        },
                        {
                          "title": "SurrealDB Async",
                          "href": "/docs/knowledge/vector-stores/surrealdb/usage/async-surreal-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LightRAG",
                  "href": "/docs/knowledge/vector-stores/lightrag/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/lightrag/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/lightrag/usage/lightrag-db",
                      "items": [
                        {
                          "title": "LightRAG",
                          "href": "/docs/knowledge/vector-stores/lightrag/usage/lightrag-db"
                        },
                        {
                          "title": "LightRAG Async",
                          "href": "/docs/knowledge/vector-stores/lightrag/usage/async-lightrag-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Upstash",
                  "href": "/docs/knowledge/vector-stores/upstash/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/upstash/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/upstash/usage/upstash-db",
                      "items": [
                        {
                          "title": "Upstash",
                          "href": "/docs/knowledge/vector-stores/upstash/usage/upstash-db"
                        },
                        {
                          "title": "Upstash Async",
                          "href": "/docs/knowledge/vector-stores/upstash/usage/async-upstash-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LangChain",
                  "href": "/docs/knowledge/vector-stores/langchain/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/langchain/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/langchain/usage/langchain-db",
                      "items": [
                        {
                          "title": "LangChain",
                          "href": "/docs/knowledge/vector-stores/langchain/usage/langchain-db"
                        },
                        {
                          "title": "LangChain Async",
                          "href": "/docs/knowledge/vector-stores/langchain/usage/async-langchain-db"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LlamaIndex",
                  "href": "/docs/knowledge/vector-stores/llamaindex/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/knowledge/vector-stores/llamaindex/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/knowledge/vector-stores/llamaindex/usage/llamaindex-db",
                      "items": [
                        {
                          "title": "LlamaIndex",
                          "href": "/docs/knowledge/vector-stores/llamaindex/usage/llamaindex-db"
                        },
                        {
                          "title": "LlamaIndex Async",
                          "href": "/docs/knowledge/vector-stores/llamaindex/usage/async-llamaindex-db"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Performance Tips",
              "href": "/docs/knowledge/concepts/performance-tips"
            }
          ]
        },
        {
          "title": "Learning",
          "href": "/docs/learning/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/learning/overview"
            },
            {
              "title": "Quickstart",
              "href": "/docs/learning/quickstart"
            },
            {
              "title": "Learning Stores",
              "href": "/docs/learning/stores/intro",
              "items": [
                {
                  "title": "Learning Stores",
                  "href": "/docs/learning/stores/intro"
                },
                {
                  "title": "User Profile",
                  "href": "/docs/learning/stores/user-profile"
                },
                {
                  "title": "User Memory",
                  "href": "/docs/learning/stores/user-memory"
                },
                {
                  "title": "Session Context",
                  "href": "/docs/learning/stores/session-context"
                },
                {
                  "title": "Entity Memory",
                  "href": "/docs/learning/stores/entity-memory"
                },
                {
                  "title": "Learned Knowledge",
                  "href": "/docs/learning/stores/learned-knowledge"
                },
                {
                  "title": "Decision Log",
                  "href": "/docs/learning/stores/decision-log"
                }
              ]
            },
            {
              "title": "Learning Modes",
              "href": "/docs/learning/learning-modes"
            },
            {
              "title": "Custom Schemas",
              "href": "/docs/learning/custom-schemas"
            }
          ]
        },
        {
          "title": "Models",
          "href": "/docs/models/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/models/overview"
            },
            {
              "title": "Model as String",
              "href": "/docs/models/model-as-string"
            },
            {
              "title": "Compatibility",
              "href": "/docs/models/compatibility"
            },
            {
              "title": "Response Caching",
              "href": "/docs/models/cache-response"
            },
            {
              "title": "Fallback Models",
              "href": "/docs/models/fallback-models"
            },
            {
              "title": "Model Providers",
              "href": "/docs/models/providers/model-index",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/models/providers/model-index"
                },
                {
                  "title": "Native Model Providers",
                  "href": "/docs/models/providers/native/anthropic/overview",
                  "items": [
                    {
                      "title": "Anthropic",
                      "href": "/docs/models/providers/native/anthropic/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/anthropic/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/anthropic/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/anthropic/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/anthropic/usage/basic-stream"
                            },
                            {
                              "title": "Beta Features",
                              "href": "/docs/models/providers/native/anthropic/usage/betas"
                            },
                            {
                              "title": "Code Execution Tool",
                              "href": "/docs/models/providers/native/anthropic/usage/code-execution"
                            },
                            {
                              "title": "Context Editing",
                              "href": "/docs/models/providers/native/anthropic/usage/context-management"
                            },
                            {
                              "title": "Claude Agent Skills",
                              "href": "/docs/models/providers/native/anthropic/usage/skills"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/anthropic/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/anthropic/usage/structured-output"
                            },
                            {
                              "title": "Agent with Structured Outputs Streaming",
                              "href": "/docs/models/providers/native/anthropic/usage/structured-output-stream"
                            },
                            {
                              "title": "Agent with Structured Outputs and Strict Tools",
                              "href": "/docs/models/providers/native/anthropic/usage/structured-output-strict-tools"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/anthropic/usage/knowledge"
                            },
                            {
                              "title": "File Upload",
                              "href": "/docs/models/providers/native/anthropic/usage/file-upload"
                            },
                            {
                              "title": "Image Input Bytes Content",
                              "href": "/docs/models/providers/native/anthropic/usage/image-input-bytes"
                            },
                            {
                              "title": "Image Input URL",
                              "href": "/docs/models/providers/native/anthropic/usage/image-input-url"
                            },
                            {
                              "title": "PDF Input Bytes Agent",
                              "href": "/docs/models/providers/native/anthropic/usage/pdf-input-bytes"
                            },
                            {
                              "title": "PDF Input Local Agent",
                              "href": "/docs/models/providers/native/anthropic/usage/pdf-input-local"
                            },
                            {
                              "title": "PDF Input URL Agent",
                              "href": "/docs/models/providers/native/anthropic/usage/pdf-input-url"
                            },
                            {
                              "title": "Prompt Caching",
                              "href": "/docs/models/providers/native/anthropic/usage/prompt-caching"
                            },
                            {
                              "title": "Response Caching",
                              "href": "/docs/models/providers/native/anthropic/usage/cache-response"
                            },
                            {
                              "title": "Web Fetch",
                              "href": "/docs/models/providers/native/anthropic/usage/web-fetch"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Cohere",
                      "href": "/docs/models/providers/native/cohere/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/cohere/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/cohere/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/cohere/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/cohere/usage/basic-stream"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/cohere/usage/image-agent"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/cohere/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/cohere/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/native/cohere/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/cohere/usage/knowledge"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Dashscope",
                      "href": "/docs/models/providers/native/dashscope/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/dashscope/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/dashscope/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/dashscope/usage/basic"
                            },
                            {
                              "title": "Basic Agent with Streaming",
                              "href": "/docs/models/providers/native/dashscope/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/dashscope/usage/tool-use"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/dashscope/usage/image-agent"
                            },
                            {
                              "title": "Image Agent with Bytes",
                              "href": "/docs/models/providers/native/dashscope/usage/image-agent-bytes"
                            },
                            {
                              "title": "Structured Output Agent",
                              "href": "/docs/models/providers/native/dashscope/usage/structured-output"
                            },
                            {
                              "title": "Thinking Agent",
                              "href": "/docs/models/providers/native/dashscope/usage/thinking-agent"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "DeepSeek",
                      "href": "/docs/models/providers/native/deepseek/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/deepseek/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/deepseek/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/deepseek/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/deepseek/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/deepseek/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/deepseek/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Google",
                      "href": "/docs/models/providers/native/google/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/google/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/google/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/google/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/google/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/google/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/google/usage/tool-use"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/native/google/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/google/usage/knowledge"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/google/usage/image-input"
                            },
                            {
                              "title": "Image Agent with File Upload",
                              "href": "/docs/models/providers/native/google/usage/image-input-file-upload"
                            },
                            {
                              "title": "Image Generation Agent",
                              "href": "/docs/models/providers/native/google/usage/image-generation"
                            },
                            {
                              "title": "Image Generation Agent (Streaming)",
                              "href": "/docs/models/providers/native/google/usage/image-generation-stream"
                            },
                            {
                              "title": "Image Editing Agent",
                              "href": "/docs/models/providers/native/google/usage/image-editing"
                            },
                            {
                              "title": "Imagen Tool with OpenAI",
                              "href": "/docs/models/providers/native/google/usage/imagen-tool"
                            },
                            {
                              "title": "Advanced Imagen Tool with Vertex AI",
                              "href": "/docs/models/providers/native/google/usage/imagen-tool-advanced"
                            },
                            {
                              "title": "Agent with Vertex AI",
                              "href": "/docs/models/providers/native/google/usage/vertexai"
                            },
                            {
                              "title": "Agent with Grounding",
                              "href": "/docs/models/providers/native/google/usage/grounding"
                            },
                            {
                              "title": "Agent with URL Context",
                              "href": "/docs/models/providers/native/google/usage/url-context"
                            },
                            {
                              "title": "Agent with URL Context and Search",
                              "href": "/docs/models/providers/native/google/usage/url-context-with-search"
                            },
                            {
                              "title": "Flash Thinking Agent",
                              "href": "/docs/models/providers/native/google/usage/flash-thinking"
                            },
                            {
                              "title": "Audio Input (Bytes Content)",
                              "href": "/docs/models/providers/native/google/usage/audio-input-bytes-content"
                            },
                            {
                              "title": "Audio Input (Upload the file)",
                              "href": "/docs/models/providers/native/google/usage/audio-input-file-upload"
                            },
                            {
                              "title": "Audio Input (Local file)",
                              "href": "/docs/models/providers/native/google/usage/audio-input-local-file-upload"
                            },
                            {
                              "title": "Agent with PDF Input (Local file)",
                              "href": "/docs/models/providers/native/google/usage/pdf-input-local"
                            },
                            {
                              "title": "Agent with PDF Input (URL)",
                              "href": "/docs/models/providers/native/google/usage/pdf-input-url"
                            },
                            {
                              "title": "Agent with GCS File Input",
                              "href": "/docs/models/providers/native/google/usage/gcs-file-input"
                            },
                            {
                              "title": "Agent with External URL Input",
                              "href": "/docs/models/providers/native/google/usage/external-url-input"
                            },
                            {
                              "title": "Agent with S3 Pre-signed URL Input",
                              "href": "/docs/models/providers/native/google/usage/s3-presigned-url-input"
                            },
                            {
                              "title": "Video Input (Bytes Content)",
                              "href": "/docs/models/providers/native/google/usage/video-input-bytes-content"
                            },
                            {
                              "title": "Video Input (File Upload)",
                              "href": "/docs/models/providers/native/google/usage/video-input-file-upload"
                            },
                            {
                              "title": "Video Input (Local File Upload)",
                              "href": "/docs/models/providers/native/google/usage/video-input-local-file-upload"
                            }
                          ]
                        },
                        {
                          "title": "Interactions API",
                          "href": "/docs/models/providers/native/google/gemini-interactions"
                        },
                        {
                          "title": "Interactions Usage",
                          "href": "/docs/models/providers/native/google/usage/interactions-basic",
                          "items": [
                            {
                              "title": "Basic Agent (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-basic"
                            },
                            {
                              "title": "Agent with Tools (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-tool-use"
                            },
                            {
                              "title": "Multi-turn Conversation (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-multi-turn"
                            },
                            {
                              "title": "Thinking (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-thinking"
                            },
                            {
                              "title": "Google Search (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-search"
                            },
                            {
                              "title": "Structured Output (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-structured-output"
                            },
                            {
                              "title": "Deep Research (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research"
                            },
                            {
                              "title": "Deep Research Streaming (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-streaming"
                            },
                            {
                              "title": "Deep Research Multi-turn (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-multi-turn"
                            },
                            {
                              "title": "Deep Research Collaborative Planning (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-collaborative-planning"
                            },
                            {
                              "title": "Deep Research with File Search (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-file-search"
                            },
                            {
                              "title": "Deep Research with MCP (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-mcp"
                            },
                            {
                              "title": "Deep Research Multimodal Input (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-multimodal"
                            },
                            {
                              "title": "Deep Research Visualization (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-deep-research-visualization"
                            },
                            {
                              "title": "Antigravity (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-antigravity"
                            },
                            {
                              "title": "Antigravity Streaming (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-antigravity-streaming"
                            },
                            {
                              "title": "Antigravity Multi-turn (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-antigravity-multi-turn"
                            },
                            {
                              "title": "Antigravity Environment Config (Interactions)",
                              "href": "/docs/models/providers/native/google/usage/interactions-antigravity-environment-config"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Meta",
                      "href": "/docs/models/providers/native/meta/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/meta/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/meta/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/meta/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/meta/usage/basic-stream"
                            },
                            {
                              "title": "Asynchronous Agent",
                              "href": "/docs/models/providers/native/meta/usage/async-basic"
                            },
                            {
                              "title": "Asynchronous Streaming Agent",
                              "href": "/docs/models/providers/native/meta/usage/async-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/meta/usage/tool-use"
                            },
                            {
                              "title": "Agent with Async Tool Usage",
                              "href": "/docs/models/providers/native/meta/usage/async-tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/meta/usage/structured-output"
                            },
                            {
                              "title": "Agent with Image Input",
                              "href": "/docs/models/providers/native/meta/usage/image-input-bytes"
                            },
                            {
                              "title": "Agent With Knowledge",
                              "href": "/docs/models/providers/native/meta/usage/knowledge"
                            },
                            {
                              "title": "Agent with Memory",
                              "href": "/docs/models/providers/native/meta/usage/memory"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Mistral",
                      "href": "/docs/models/providers/native/mistral/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/mistral/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/mistral/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/mistral/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/native/mistral/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/native/mistral/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Streaming Agent",
                              "href": "/docs/models/providers/native/mistral/usage/async-basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/mistral/usage/tool-use"
                            },
                            {
                              "title": "Async Agent with Tools",
                              "href": "/docs/models/providers/native/mistral/usage/async-tool-use"
                            },
                            {
                              "title": "Agent with Memory",
                              "href": "/docs/models/providers/native/mistral/usage/memory"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/native/mistral/usage/structured-output"
                            },
                            {
                              "title": "Structured Output With Tool Use",
                              "href": "/docs/models/providers/native/mistral/usage/structured-output-with-tool-use"
                            },
                            {
                              "title": "Async Structured Output Agent",
                              "href": "/docs/models/providers/native/mistral/usage/async-structured-output"
                            },
                            {
                              "title": "Image Bytes Input Agent",
                              "href": "/docs/models/providers/native/mistral/usage/image-bytes-input-agent"
                            },
                            {
                              "title": "Image Compare Agent",
                              "href": "/docs/models/providers/native/mistral/usage/image-compare-agent"
                            },
                            {
                              "title": "Image File Input Agent",
                              "href": "/docs/models/providers/native/mistral/usage/image-file-input-agent"
                            },
                            {
                              "title": "Image Ocr With Structured Output",
                              "href": "/docs/models/providers/native/mistral/usage/image-ocr-with-structured-output"
                            },
                            {
                              "title": "Image Transcribe Document Agent",
                              "href": "/docs/models/providers/native/mistral/usage/image-transcribe-document-agent"
                            },
                            {
                              "title": "Mistral Small",
                              "href": "/docs/models/providers/native/mistral/usage/mistral-small"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "OpenAI",
                      "href": "/docs/models/providers/native/openai/completion/overview",
                      "items": [
                        {
                          "title": "OpenAI Chat Completion",
                          "href": "/docs/models/providers/native/openai/completion/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/native/openai/completion/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/native/openai/completion/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/native/openai/completion/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/native/openai/completion/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/native/openai/completion/usage/tool-use"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/native/openai/completion/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/native/openai/completion/usage/storage"
                                },
                                {
                                  "title": "Agent with Knowledge",
                                  "href": "/docs/models/providers/native/openai/completion/usage/knowledge"
                                },
                                {
                                  "title": "Image Agent",
                                  "href": "/docs/models/providers/native/openai/completion/usage/image-agent"
                                },
                                {
                                  "title": "Audio Input Agent",
                                  "href": "/docs/models/providers/native/openai/completion/usage/audio-input-agent"
                                },
                                {
                                  "title": "Audio Output Agent",
                                  "href": "/docs/models/providers/native/openai/completion/usage/audio-output-agent"
                                },
                                {
                                  "title": "Generate Images",
                                  "href": "/docs/models/providers/native/openai/completion/usage/generate-images"
                                },
                                {
                                  "title": "Agent with Reasoning Effort",
                                  "href": "/docs/models/providers/native/openai/completion/usage/reasoning-effort"
                                },
                                {
                                  "title": "Response Caching",
                                  "href": "/docs/models/providers/native/openai/completion/usage/cache-response"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "OpenAI Responses",
                          "href": "/docs/models/providers/native/openai/responses/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/native/openai/responses/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/native/openai/responses/usage/agent-flex-tier",
                              "items": [
                                {
                                  "title": "Agent Flex Tier",
                                  "href": "/docs/models/providers/native/openai/responses/usage/agent-flex-tier"
                                },
                                {
                                  "title": "Async Basic",
                                  "href": "/docs/models/providers/native/openai/responses/usage/async-basic"
                                },
                                {
                                  "title": "Async Basic Stream",
                                  "href": "/docs/models/providers/native/openai/responses/usage/async-basic-stream"
                                },
                                {
                                  "title": "Async Tool Use",
                                  "href": "/docs/models/providers/native/openai/responses/usage/async-tool-use"
                                },
                                {
                                  "title": "Basic",
                                  "href": "/docs/models/providers/native/openai/responses/usage/basic"
                                },
                                {
                                  "title": "Basic Stream",
                                  "href": "/docs/models/providers/native/openai/responses/usage/basic-stream"
                                },
                                {
                                  "title": "Db",
                                  "href": "/docs/models/providers/native/openai/responses/usage/db"
                                },
                                {
                                  "title": "Deep Research Agent",
                                  "href": "/docs/models/providers/native/openai/responses/usage/deep-research-agent"
                                },
                                {
                                  "title": "Image Agent",
                                  "href": "/docs/models/providers/native/openai/responses/usage/image-agent"
                                },
                                {
                                  "title": "Image Agent Bytes",
                                  "href": "/docs/models/providers/native/openai/responses/usage/image-agent-bytes"
                                },
                                {
                                  "title": "Image Agent With Memory",
                                  "href": "/docs/models/providers/native/openai/responses/usage/image-agent-with-memory"
                                },
                                {
                                  "title": "Image Generation Agent",
                                  "href": "/docs/models/providers/native/openai/responses/usage/image-generation-agent"
                                },
                                {
                                  "title": "Knowledge",
                                  "href": "/docs/models/providers/native/openai/responses/usage/knowledge"
                                },
                                {
                                  "title": "Memory",
                                  "href": "/docs/models/providers/native/openai/responses/usage/memory"
                                },
                                {
                                  "title": "Pdf Input Local",
                                  "href": "/docs/models/providers/native/openai/responses/usage/pdf-input-local"
                                },
                                {
                                  "title": "Pdf Input Url",
                                  "href": "/docs/models/providers/native/openai/responses/usage/pdf-input-url"
                                },
                                {
                                  "title": "Reasoning O3 Mini",
                                  "href": "/docs/models/providers/native/openai/responses/usage/reasoning-o3-mini"
                                },
                                {
                                  "title": "Structured Output",
                                  "href": "/docs/models/providers/native/openai/responses/usage/structured-output"
                                },
                                {
                                  "title": "Tool Use",
                                  "href": "/docs/models/providers/native/openai/responses/usage/tool-use"
                                },
                                {
                                  "title": "Tool Use Gpt 5",
                                  "href": "/docs/models/providers/native/openai/responses/usage/tool-use-gpt-5"
                                },
                                {
                                  "title": "Tool Use O3",
                                  "href": "/docs/models/providers/native/openai/responses/usage/tool-use-o3"
                                },
                                {
                                  "title": "Tool Use Stream",
                                  "href": "/docs/models/providers/native/openai/responses/usage/tool-use-stream"
                                },
                                {
                                  "title": "Verbosity Control",
                                  "href": "/docs/models/providers/native/openai/responses/usage/verbosity-control"
                                },
                                {
                                  "title": "Websearch Builtin Tool",
                                  "href": "/docs/models/providers/native/openai/responses/usage/websearch-builtin-tool"
                                },
                                {
                                  "title": "ZDR Reasoning Agent",
                                  "href": "/docs/models/providers/native/openai/responses/usage/zdr-reasoning-agent"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Perplexity",
                      "href": "/docs/models/providers/native/perplexity/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/perplexity/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/perplexity/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/perplexity/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/native/perplexity/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/native/perplexity/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Streaming Agent",
                              "href": "/docs/models/providers/native/perplexity/usage/async-basic-stream"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/perplexity/usage/knowledge"
                            },
                            {
                              "title": "Agent with Memory",
                              "href": "/docs/models/providers/native/perplexity/usage/memory"
                            },
                            {
                              "title": "Agent with Structured Output",
                              "href": "/docs/models/providers/native/perplexity/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Vercel",
                      "href": "/docs/models/providers/native/vercel/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/vercel/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/vercel/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/vercel/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/vercel/usage/basic-stream"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/vercel/usage/image-agent"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/vercel/usage/knowledge"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/vercel/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "XAI",
                      "href": "/docs/models/providers/native/xai/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/xai/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/xai/usage/basic",
                          "items": [
                            {
                              "title": "Basic",
                              "href": "/docs/models/providers/native/xai/usage/basic"
                            },
                            {
                              "title": "Basic Stream",
                              "href": "/docs/models/providers/native/xai/usage/basic-stream"
                            },
                            {
                              "title": "Tool Use",
                              "href": "/docs/models/providers/native/xai/usage/tool-use"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/native/xai/usage/basic-async"
                            },
                            {
                              "title": "Async Streaming Agent",
                              "href": "/docs/models/providers/native/xai/usage/basic-async-stream"
                            },
                            {
                              "title": "Tool Use Stream",
                              "href": "/docs/models/providers/native/xai/usage/tool-use-stream"
                            },
                            {
                              "title": "Async Tool Use",
                              "href": "/docs/models/providers/native/xai/usage/async-tool-use"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/native/xai/usage/structured-output"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/xai/usage/image-agent"
                            },
                            {
                              "title": "Image Agent Bytes",
                              "href": "/docs/models/providers/native/xai/usage/image-agent-bytes"
                            },
                            {
                              "title": "Live Search Agent",
                              "href": "/docs/models/providers/native/xai/usage/live-search-agent"
                            },
                            {
                              "title": "Live Search Agent Stream",
                              "href": "/docs/models/providers/native/xai/usage/live-search-agent-stream"
                            },
                            {
                              "title": "Reasoning Agent",
                              "href": "/docs/models/providers/native/xai/usage/reasoning-agent"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Local Model Providers",
                  "href": "/docs/models/providers/local/ollama/overview",
                  "items": [
                    {
                      "title": "Ollama",
                      "href": "/docs/models/providers/local/ollama/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/local/ollama/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/local/ollama/usage/basic",
                          "items": [
                            {
                              "title": "Basic",
                              "href": "/docs/models/providers/local/ollama/usage/basic"
                            },
                            {
                              "title": "Basic Stream",
                              "href": "/docs/models/providers/local/ollama/usage/basic-stream"
                            },
                            {
                              "title": "Ollama Cloud",
                              "href": "/docs/models/providers/local/ollama/usage/cloud"
                            },
                            {
                              "title": "Async Basic",
                              "href": "/docs/models/providers/local/ollama/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Stream",
                              "href": "/docs/models/providers/local/ollama/usage/async-basic-stream"
                            },
                            {
                              "title": "Tool Use",
                              "href": "/docs/models/providers/local/ollama/usage/tool-use"
                            },
                            {
                              "title": "Tool Use Stream",
                              "href": "/docs/models/providers/local/ollama/usage/tool-use-stream"
                            },
                            {
                              "title": "Knowledge",
                              "href": "/docs/models/providers/local/ollama/usage/knowledge"
                            },
                            {
                              "title": "Memory",
                              "href": "/docs/models/providers/local/ollama/usage/memory"
                            },
                            {
                              "title": "Demo Deepseek R1",
                              "href": "/docs/models/providers/local/ollama/usage/demo-deepseek-r1"
                            },
                            {
                              "title": "Demo Gemma",
                              "href": "/docs/models/providers/local/ollama/usage/demo-gemma"
                            },
                            {
                              "title": "Demo Phi4",
                              "href": "/docs/models/providers/local/ollama/usage/demo-phi4"
                            },
                            {
                              "title": "Demo Qwen",
                              "href": "/docs/models/providers/local/ollama/usage/demo-qwen"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/local/ollama/usage/image-agent"
                            },
                            {
                              "title": "Multimodal Agent",
                              "href": "/docs/models/providers/local/ollama/usage/multimodal"
                            },
                            {
                              "title": "Set Client",
                              "href": "/docs/models/providers/local/ollama/usage/set-client"
                            },
                            {
                              "title": "Set Temperature",
                              "href": "/docs/models/providers/local/ollama/usage/set-temperature"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/local/ollama/usage/storage"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/local/ollama/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "LlamaCpp",
                      "href": "/docs/models/providers/local/llama-cpp/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/local/llama-cpp/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/local/llama-cpp/usage/basic",
                          "items": [
                            {
                              "title": "Basic",
                              "href": "/docs/models/providers/local/llama-cpp/usage/basic"
                            },
                            {
                              "title": "Basic Stream",
                              "href": "/docs/models/providers/local/llama-cpp/usage/basic-stream"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/local/llama-cpp/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/local/llama-cpp/usage/tool-use"
                            },
                            {
                              "title": "Agent with Tools Stream",
                              "href": "/docs/models/providers/local/llama-cpp/usage/tool-use-stream"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "LM Studio",
                      "href": "/docs/models/providers/local/lmstudio/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/local/lmstudio/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/local/lmstudio/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/local/lmstudio/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/local/lmstudio/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/local/lmstudio/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/local/lmstudio/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/local/lmstudio/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/local/lmstudio/usage/knowledge"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/local/lmstudio/usage/image-agent"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "VLLM",
                      "href": "/docs/models/providers/local/vllm/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/local/vllm/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/local/vllm/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/local/vllm/usage/basic"
                            },
                            {
                              "title": "Agent with Streaming",
                              "href": "/docs/models/providers/local/vllm/usage/basic-stream"
                            },
                            {
                              "title": "Async Agent",
                              "href": "/docs/models/providers/local/vllm/usage/async-basic"
                            },
                            {
                              "title": "Async Agent with Streaming",
                              "href": "/docs/models/providers/local/vllm/usage/async-basic-stream"
                            },
                            {
                              "title": "Code Generation",
                              "href": "/docs/models/providers/local/vllm/usage/code-generation"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/local/vllm/usage/storage"
                            },
                            {
                              "title": "Agent with Memory",
                              "href": "/docs/models/providers/local/vllm/usage/memory"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/local/vllm/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/local/vllm/usage/tool-use"
                            },
                            {
                              "title": "Async Agent with Tools",
                              "href": "/docs/models/providers/local/vllm/usage/async-tool-use"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Cloud Model Providers",
                  "href": "/docs/models/providers/cloud/aws-bedrock/overview",
                  "items": [
                    {
                      "title": "AWS",
                      "href": "/docs/models/providers/cloud/aws-bedrock/overview",
                      "items": [
                        {
                          "title": "AWS Bedrock",
                          "href": "/docs/models/providers/cloud/aws-bedrock/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/cloud/aws-bedrock/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/tool-use"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/storage"
                                },
                                {
                                  "title": "Agent with Knowledge",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/knowledge"
                                },
                                {
                                  "title": "Agent with Image Input",
                                  "href": "/docs/models/providers/cloud/aws-bedrock/usage/image-agent"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "AWS Claude",
                          "href": "/docs/models/providers/cloud/aws-claude/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/cloud/aws-claude/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/tool-use"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/storage"
                                },
                                {
                                  "title": "Agent with Knowledge",
                                  "href": "/docs/models/providers/cloud/aws-claude/usage/knowledge"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Azure",
                      "href": "/docs/models/providers/cloud/azure-ai-foundry/overview",
                      "items": [
                        {
                          "title": "Azure AI Foundry",
                          "href": "/docs/models/providers/cloud/azure-ai-foundry/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic"
                                },
                                {
                                  "title": "Basic Streaming",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Knowledge Base",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/knowledge"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/storage"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/tool-use"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Azure AI Foundry Claude",
                          "href": "/docs/models/providers/cloud/azure-foundry-claude/overview",
                          "items": [
                            {
                              "title": "Claude",
                              "href": "/docs/models/providers/cloud/azure-foundry-claude/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/cloud/azure-foundry-claude/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/cloud/azure-foundry-claude/usage/basic"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/cloud/azure-foundry-claude/usage/tool-use"
                                },
                                {
                                  "title": "Extended Thinking",
                                  "href": "/docs/models/providers/cloud/azure-foundry-claude/usage/thinking"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Azure OpenAI",
                          "href": "/docs/models/providers/cloud/azure-openai/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/cloud/azure-openai/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/basic"
                                },
                                {
                                  "title": "Basic Streaming",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Knowledge Base",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/knowledge"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/storage"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/cloud/azure-openai/usage/tool-use"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "IBM WatsonX",
                      "href": "/docs/models/providers/cloud/ibm-watsonx/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic"
                            },
                            {
                              "title": "Streaming Basic Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic-stream"
                            },
                            {
                              "title": "Async Streaming Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-basic"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/tool-use"
                            },
                            {
                              "title": "Agent with Async Tool Usage",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-tool-use"
                            },
                            {
                              "title": "Agent with Structured Output",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/storage"
                            },
                            {
                              "title": "RAG Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/knowledge"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/cloud/ibm-watsonx/usage/image-agent-bytes"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Vertex AI",
                      "href": "/docs/models/providers/cloud/vertexai-claude/overview",
                      "items": [
                        {
                          "title": "Claude",
                          "href": "/docs/models/providers/cloud/vertexai-claude/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/structured-output"
                            },
                            {
                              "title": "PDF Input Local Agent",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-local"
                            },
                            {
                              "title": "PDF Input URL Agent",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-url"
                            },
                            {
                              "title": "PDF Input Bytes Agent",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-bytes"
                            },
                            {
                              "title": "Image Input Bytes Content",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/image-input-bytes"
                            },
                            {
                              "title": "Image Input URL",
                              "href": "/docs/models/providers/cloud/vertexai-claude/usage/image-input-url"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Model Gateways & Aggregators",
                  "href": "/docs/models/providers/gateways/aimlapi/overview",
                  "items": [
                    {
                      "title": "AIML API",
                      "href": "/docs/models/providers/gateways/aimlapi/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/aimlapi/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs",
                          "items": []
                        }
                      ]
                    },
                    {
                      "title": "Cerebras",
                      "href": "/docs/models/providers/gateways/cerebras/overview",
                      "items": [
                        {
                          "title": "Cerebras",
                          "href": "/docs/models/providers/gateways/cerebras/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/gateways/cerebras/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/gateways/cerebras/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/tool-use"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/storage"
                                },
                                {
                                  "title": "Agent with Knowledge Base",
                                  "href": "/docs/models/providers/gateways/cerebras/usage/knowledge"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Cerebras OpenAI",
                          "href": "/docs/models/providers/gateways/cerebras-openai/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/gateways/cerebras-openai/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/tool-use"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/storage"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/gateways/cerebras-openai/usage/knowledge"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "CometAPI",
                      "href": "/docs/models/providers/gateways/cometapi/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/cometapi/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs",
                          "items": []
                        }
                      ]
                    },
                    {
                      "title": "DeepInfra",
                      "href": "/docs/models/providers/gateways/deepinfra/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/deepinfra/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/deepinfra/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/deepinfra/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/deepinfra/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/deepinfra/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/deepinfra/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Fireworks",
                      "href": "/docs/models/providers/gateways/fireworks/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/fireworks/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/fireworks/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/fireworks/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/fireworks/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/fireworks/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/fireworks/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Groq",
                      "href": "/docs/models/providers/gateways/groq/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/groq/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/groq/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/groq/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/groq/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/groq/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/gateways/groq/usage/knowledge"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/image-agent"
                            },
                            {
                              "title": "Deep Knowledge Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/deep-knowledge"
                            },
                            {
                              "title": "Browser Search Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/browser-search"
                            },
                            {
                              "title": "Agent with Metrics",
                              "href": "/docs/models/providers/gateways/groq/usage/metrics"
                            },
                            {
                              "title": "Reasoning Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/reasoning-agent"
                            },
                            {
                              "title": "Transcription Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/transcription-agent"
                            },
                            {
                              "title": "Translation Agent",
                              "href": "/docs/models/providers/gateways/groq/usage/translation-agent"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Hugging Face",
                      "href": "/docs/models/providers/gateways/huggingface/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/huggingface/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/huggingface/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/huggingface/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/huggingface/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic.Py",
                              "href": "/docs/models/providers/gateways/huggingface/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Stream.Py",
                              "href": "/docs/models/providers/gateways/huggingface/usage/async-basic-stream"
                            },
                            {
                              "title": "Llama Essay Writer",
                              "href": "/docs/models/providers/gateways/huggingface/usage/llama-essay-writer"
                            },
                            {
                              "title": "Tool Use",
                              "href": "/docs/models/providers/gateways/huggingface/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "LangDB",
                      "href": "/docs/models/providers/gateways/langdb/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/langdb/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/langdb/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/langdb/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/gateways/langdb/usage/basic-stream"
                            },
                            {
                              "title": "Data Analyst Agent",
                              "href": "/docs/models/providers/gateways/langdb/usage/data-analyst"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/gateways/langdb/usage/structured-output"
                            },
                            {
                              "title": "Web Search Agent",
                              "href": "/docs/models/providers/gateways/langdb/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "LiteLLM",
                      "href": "/docs/models/providers/gateways/litellm/overview",
                      "items": [
                        {
                          "title": "LiteLLM",
                          "href": "/docs/models/providers/gateways/litellm/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/gateways/litellm/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/gateways/litellm/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/gateways/litellm/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/gateways/litellm/usage/basic-stream"
                                },
                                {
                                  "title": "Async Basic Agent",
                                  "href": "/docs/models/providers/gateways/litellm/usage/async-basic"
                                },
                                {
                                  "title": "Async Basic Streaming Agent",
                                  "href": "/docs/models/providers/gateways/litellm/usage/async-basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/gateways/litellm/usage/tool-use"
                                },
                                {
                                  "title": "Async Tool Use",
                                  "href": "/docs/models/providers/gateways/litellm/usage/async-tool-use"
                                },
                                {
                                  "title": "Audio Input Agent",
                                  "href": "/docs/models/providers/gateways/litellm/usage/audio-input-agent"
                                },
                                {
                                  "title": "Agent with Knowledge",
                                  "href": "/docs/models/providers/gateways/litellm/usage/knowledge"
                                },
                                {
                                  "title": "Agent with Structured Outputs",
                                  "href": "/docs/models/providers/gateways/litellm/usage/structured-output"
                                },
                                {
                                  "title": "Agent with Storage",
                                  "href": "/docs/models/providers/gateways/litellm/usage/storage"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "LiteLLM OpenAI",
                          "href": "/docs/models/providers/gateways/litellm-openai/overview",
                          "items": [
                            {
                              "title": "Overview",
                              "href": "/docs/models/providers/gateways/litellm-openai/overview"
                            },
                            {
                              "title": "Usage",
                              "href": "/docs/models/providers/gateways/litellm-openai/usage/basic",
                              "items": [
                                {
                                  "title": "Basic Agent",
                                  "href": "/docs/models/providers/gateways/litellm-openai/usage/basic"
                                },
                                {
                                  "title": "Streaming Agent",
                                  "href": "/docs/models/providers/gateways/litellm-openai/usage/basic-stream"
                                },
                                {
                                  "title": "Agent with Tools",
                                  "href": "/docs/models/providers/gateways/litellm-openai/usage/tool-use"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Nebius",
                      "href": "/docs/models/providers/gateways/nebius/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/nebius/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/nebius/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/nebius/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/nebius/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/nebius/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/nebius/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/nebius/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/gateways/nebius/usage/knowledge"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Neosantara",
                      "href": "/docs/models/providers/gateways/neosantara/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/neosantara/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/neosantara/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/neosantara/usage/basic"
                            },
                            {
                              "title": "Basic Stream",
                              "href": "/docs/models/providers/gateways/neosantara/usage/basic-stream"
                            },
                            {
                              "title": "Tool Use",
                              "href": "/docs/models/providers/gateways/neosantara/usage/tool-use"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/gateways/neosantara/usage/structured-output"
                            },
                            {
                              "title": "Async Basic",
                              "href": "/docs/models/providers/gateways/neosantara/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Stream",
                              "href": "/docs/models/providers/gateways/neosantara/usage/async-basic-stream"
                            },
                            {
                              "title": "Async Tool Use",
                              "href": "/docs/models/providers/gateways/neosantara/usage/async-tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Nexus",
                      "href": "/docs/models/providers/gateways/nexus/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/nexus/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/nexus/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/nexus/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/gateways/nexus/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/gateways/nexus/usage/async-basic"
                            },
                            {
                              "title": "Async Streaming Agent",
                              "href": "/docs/models/providers/gateways/nexus/usage/async-basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/nexus/usage/tool-use"
                            },
                            {
                              "title": "Async Agent with Tools",
                              "href": "/docs/models/providers/gateways/nexus/usage/async-tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "NVIDIA",
                      "href": "/docs/models/providers/gateways/nvidia/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/nvidia/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/nvidia/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/nvidia/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/gateways/nvidia/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/gateways/nvidia/usage/async-basic"
                            },
                            {
                              "title": "Async Streaming Agent",
                              "href": "/docs/models/providers/gateways/nvidia/usage/async-basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/nvidia/usage/tool-use"
                            },
                            {
                              "title": "Async Agent with Tools",
                              "href": "/docs/models/providers/gateways/nvidia/usage/async-tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "OpenRouter",
                      "href": "/docs/models/providers/gateways/openrouter/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/openrouter/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs",
                          "items": []
                        }
                      ]
                    },
                    {
                      "title": "Portkey",
                      "href": "/docs/models/providers/gateways/portkey/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/portkey/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/portkey/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/portkey/usage/basic"
                            },
                            {
                              "title": "Basic Agent with Streaming",
                              "href": "/docs/models/providers/gateways/portkey/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/portkey/usage/tool-use"
                            },
                            {
                              "title": "Agent with Tools and Streaming",
                              "href": "/docs/models/providers/gateways/portkey/usage/tool-use-stream"
                            },
                            {
                              "title": "Structured Output Agent",
                              "href": "/docs/models/providers/gateways/portkey/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Requesty",
                      "href": "/docs/models/providers/gateways/requesty/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/requesty/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/requesty/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/requesty/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/requesty/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/requesty/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Output",
                              "href": "/docs/models/providers/gateways/requesty/usage/structured-output"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Sambanova",
                      "href": "/docs/models/providers/gateways/sambanova/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/sambanova/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs",
                          "items": []
                        }
                      ]
                    },
                    {
                      "title": "SiliconFlow",
                      "href": "/docs/models/providers/gateways/siliconflow/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/siliconflow/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic-stream",
                          "items": [
                            {
                              "title": "Async Streaming Agent",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic"
                            },
                            {
                              "title": "Async Agent with Tools",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/async-tool-use"
                            },
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/basic"
                            },
                            {
                              "title": "Basic Streaming Agent",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/siliconflow/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Together",
                      "href": "/docs/models/providers/gateways/together/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/together/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/together/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/together/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/together/usage/basic-stream"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/gateways/together/usage/image-agent"
                            },
                            {
                              "title": "Image Input Bytes Content",
                              "href": "/docs/models/providers/gateways/together/usage/image-agent-bytes"
                            },
                            {
                              "title": "Image Agent with Memory",
                              "href": "/docs/models/providers/gateways/together/usage/image-agent-memory"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/together/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/together/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Use OpenAI-compatible models",
                  "href": "/docs/models/providers/openai-like"
                }
              ]
            }
          ]
        },
        {
          "title": "Context Providers",
          "href": "/docs/context-providers/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/context-providers/overview"
            },
            {
              "title": "Using Providers",
              "href": "/docs/context-providers/using-providers"
            },
            {
              "title": "Providers",
              "href": "/docs/context-providers/providers/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/context-providers/providers/overview"
                },
                {
                  "title": "Slack",
                  "href": "/docs/context-providers/providers/slack"
                },
                {
                  "title": "Gmail",
                  "href": "/docs/context-providers/providers/gmail"
                },
                {
                  "title": "Calendar",
                  "href": "/docs/context-providers/providers/calendar"
                },
                {
                  "title": "Drive",
                  "href": "/docs/context-providers/providers/drive"
                },
                {
                  "title": "Database",
                  "href": "/docs/context-providers/providers/database"
                },
                {
                  "title": "Filesystem",
                  "href": "/docs/context-providers/providers/filesystem"
                },
                {
                  "title": "Web",
                  "href": "/docs/context-providers/providers/web"
                },
                {
                  "title": "MCP",
                  "href": "/docs/context-providers/providers/mcp"
                },
                {
                  "title": "Wiki",
                  "href": "/docs/context-providers/providers/wiki"
                },
                {
                  "title": "Workspace",
                  "href": "/docs/context-providers/providers/workspace"
                }
              ]
            },
            {
              "title": "Custom Providers",
              "href": "/docs/context-providers/custom-providers"
            }
          ]
        },
        {
          "title": "Tools",
          "href": "/docs/tools/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/tools/overview"
            },
            {
              "title": "Tools with Agents",
              "href": "/docs/tools/agent",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/tools/agent"
                },
                {
                  "title": "Usage",
                  "href": "/docs",
                  "items": []
                }
              ]
            },
            {
              "title": "Tools with Teams",
              "href": "/docs/tools/usage/team-with-custom-tools",
              "items": [
                {
                  "title": "Usage",
                  "href": "/docs/tools/usage/team-with-custom-tools",
                  "items": [
                    {
                      "title": "Team with Custom Tools",
                      "href": "/docs/tools/usage/team-with-custom-tools"
                    },
                    {
                      "title": "Team with Tool Hooks",
                      "href": "/docs/tools/usage/team-with-tool-hooks"
                    },
                    {
                      "title": "Async Team with Tools",
                      "href": "/docs/tools/usage/async-team-with-tools"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Create Your Own Tools",
              "href": "/docs/tools/creating-tools/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/tools/creating-tools/overview"
                },
                {
                  "title": "Python Functions as Tools",
                  "href": "/docs/tools/creating-tools/python-functions"
                },
                {
                  "title": "Custom Toolkits",
                  "href": "/docs/tools/creating-tools/toolkits"
                }
              ]
            },
            {
              "title": "Tool Hooks",
              "href": "/docs/tools/hooks"
            },
            {
              "title": "MCP",
              "href": "/docs/tools/mcp/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/tools/mcp/overview"
                },
                {
                  "title": "MCP Toolbox",
                  "href": "/docs/tools/mcp/mcp-toolbox"
                },
                {
                  "title": "Multiple MCP Servers",
                  "href": "/docs/tools/mcp/multiple-servers"
                },
                {
                  "title": "Dynamic Headers",
                  "href": "/docs/tools/mcp/dynamic-headers"
                },
                {
                  "title": "Transports",
                  "href": "/docs/tools/mcp/transports/stdio",
                  "items": [
                    {
                      "title": "Stdio",
                      "href": "/docs/tools/mcp/transports/stdio"
                    },
                    {
                      "title": "Streamable HTTP",
                      "href": "/docs/tools/mcp/transports/streamable_http"
                    },
                    {
                      "title": "SSE",
                      "href": "/docs/tools/mcp/transports/sse"
                    }
                  ]
                },
                {
                  "title": "Understanding Server Parameters",
                  "href": "/docs/tools/mcp/server-params"
                },
                {
                  "title": "Usage",
                  "href": "/docs/tools/mcp/usage/airbnb",
                  "items": [
                    {
                      "title": "Airbnb MCP agent",
                      "href": "/docs/tools/mcp/usage/airbnb"
                    },
                    {
                      "title": "GitHub MCP agent",
                      "href": "/docs/tools/mcp/usage/github"
                    },
                    {
                      "title": "Notion MCP agent",
                      "href": "/docs/tools/mcp/usage/notion"
                    },
                    {
                      "title": "Parallel MCP agent",
                      "href": "/docs/tools/mcp/usage/parallel"
                    },
                    {
                      "title": "Pipedream Auth",
                      "href": "/docs/tools/mcp/usage/pipedream-auth"
                    },
                    {
                      "title": "Pipedream Slack",
                      "href": "/docs/tools/mcp/usage/pipedream-slack"
                    },
                    {
                      "title": "Pipedream Google Calendar",
                      "href": "/docs/tools/mcp/usage/pipedream-google-calendar"
                    },
                    {
                      "title": "Pipedream LinkedIn",
                      "href": "/docs/tools/mcp/usage/pipedream-linkedin"
                    },
                    {
                      "title": "Stagehand MCP agent",
                      "href": "/docs/tools/mcp/usage/stagehand"
                    },
                    {
                      "title": "Stripe",
                      "href": "/docs/tools/mcp/usage/stripe"
                    },
                    {
                      "title": "Supabase MCP agent",
                      "href": "/docs/tools/mcp/usage/supabase"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Reasoning Tools",
              "href": "/docs/tools/reasoning_tools/reasoning-tools",
              "items": [
                {
                  "title": "Reasoning Tools",
                  "href": "/docs/tools/reasoning_tools/reasoning-tools"
                },
                {
                  "title": "Workflow Tools",
                  "href": "/docs/tools/reasoning_tools/workflow-tools"
                },
                {
                  "title": "Knowledge Tools",
                  "href": "/docs/tools/reasoning_tools/knowledge-tools"
                },
                {
                  "title": "Memory Tools",
                  "href": "/docs/tools/reasoning_tools/memory-tools"
                }
              ]
            },
            {
              "title": "Tool Call Limit",
              "href": "/docs/tools/tool-call-limit"
            },
            {
              "title": "Including and excluding tools",
              "href": "/docs/tools/selecting-tools"
            },
            {
              "title": "Tool Result Caching",
              "href": "/docs/tools/caching"
            },
            {
              "title": "Updating an Agent's Tools",
              "href": "/docs/tools/attaching-tools"
            },
            {
              "title": "Exceptions & Retries",
              "href": "/docs/tools/exceptions"
            },
            {
              "title": "Toolkits",
              "href": "/docs/tools/toolkits/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/tools/toolkits/overview"
                },
                {
                  "title": "Search",
                  "href": "/docs/tools/toolkits/search/websearch",
                  "items": [
                    {
                      "title": "Web Search",
                      "href": "/docs/tools/toolkits/search/websearch"
                    },
                    {
                      "title": "Arxiv",
                      "href": "/docs/tools/toolkits/search/arxiv"
                    },
                    {
                      "title": "BaiduSearch",
                      "href": "/docs/tools/toolkits/search/baidusearch"
                    },
                    {
                      "title": "DuckDuckGo",
                      "href": "/docs/tools/toolkits/search/duckduckgo"
                    },
                    {
                      "title": "Exa",
                      "href": "/docs/tools/toolkits/search/exa"
                    },
                    {
                      "title": "Hacker News",
                      "href": "/docs/tools/toolkits/search/hackernews"
                    },
                    {
                      "title": "Linkup",
                      "href": "/docs/tools/toolkits/search/linkup"
                    },
                    {
                      "title": "Parallel",
                      "href": "/docs/tools/toolkits/search/parallel"
                    },
                    {
                      "title": "Perplexity",
                      "href": "/docs/tools/toolkits/search/perplexity"
                    },
                    {
                      "title": "Pubmed",
                      "href": "/docs/tools/toolkits/search/pubmed"
                    },
                    {
                      "title": "Searxng",
                      "href": "/docs/tools/toolkits/search/searxng"
                    },
                    {
                      "title": "Seltz",
                      "href": "/docs/tools/toolkits/search/seltz"
                    },
                    {
                      "title": "Serpapi",
                      "href": "/docs/tools/toolkits/search/serpapi"
                    },
                    {
                      "title": "SerperApi",
                      "href": "/docs/tools/toolkits/search/serper"
                    },
                    {
                      "title": "Tavily",
                      "href": "/docs/tools/toolkits/search/tavily"
                    },
                    {
                      "title": "Valyu",
                      "href": "/docs/tools/toolkits/search/valyu"
                    },
                    {
                      "title": "Wikipedia",
                      "href": "/docs/tools/toolkits/search/wikipedia"
                    },
                    {
                      "title": "Brave Search",
                      "href": "/docs/tools/toolkits/search/bravesearch"
                    }
                  ]
                },
                {
                  "title": "Social",
                  "href": "/docs/tools/toolkits/social/discord",
                  "items": [
                    {
                      "title": "Discord",
                      "href": "/docs/tools/toolkits/social/discord"
                    },
                    {
                      "title": "Email",
                      "href": "/docs/tools/toolkits/social/email"
                    },
                    {
                      "title": "Gmail",
                      "href": "/docs/tools/toolkits/social/gmail"
                    },
                    {
                      "title": "Reddit",
                      "href": "/docs/tools/toolkits/social/reddit"
                    },
                    {
                      "title": "Slack",
                      "href": "/docs/tools/toolkits/social/slack"
                    },
                    {
                      "title": "Telegram",
                      "href": "/docs/tools/toolkits/social/telegram"
                    },
                    {
                      "title": "Twilio",
                      "href": "/docs/tools/toolkits/social/twilio"
                    },
                    {
                      "title": "Webex",
                      "href": "/docs/tools/toolkits/social/webex"
                    },
                    {
                      "title": "WhatsApp",
                      "href": "/docs/tools/toolkits/social/whatsapp"
                    },
                    {
                      "title": "X (Twitter)",
                      "href": "/docs/tools/toolkits/social/x"
                    },
                    {
                      "title": "Zoom",
                      "href": "/docs/tools/toolkits/social/zoom"
                    }
                  ]
                },
                {
                  "title": "Web Scraping",
                  "href": "/docs/tools/toolkits/web-scrape/agentql",
                  "items": [
                    {
                      "title": "AgentQL",
                      "href": "/docs/tools/toolkits/web-scrape/agentql"
                    },
                    {
                      "title": "Browserbase",
                      "href": "/docs/tools/toolkits/web-scrape/browserbase"
                    },
                    {
                      "title": "Crawl4AI",
                      "href": "/docs/tools/toolkits/web-scrape/crawl4ai"
                    },
                    {
                      "title": "Firecrawl",
                      "href": "/docs/tools/toolkits/web-scrape/firecrawl"
                    },
                    {
                      "title": "Jina Reader",
                      "href": "/docs/tools/toolkits/web-scrape/jina-reader"
                    },
                    {
                      "title": "Newspaper",
                      "href": "/docs/tools/toolkits/web-scrape/newspaper"
                    },
                    {
                      "title": "Newspaper4k",
                      "href": "/docs/tools/toolkits/web-scrape/newspaper4k"
                    },
                    {
                      "title": "Spider",
                      "href": "/docs/tools/toolkits/web-scrape/spider"
                    },
                    {
                      "title": "Trafilatura",
                      "href": "/docs/tools/toolkits/web-scrape/trafilatura"
                    },
                    {
                      "title": "Website Tools",
                      "href": "/docs/tools/toolkits/web-scrape/website"
                    },
                    {
                      "title": "ScrapeGraph",
                      "href": "/docs/tools/toolkits/web-scrape/scrapegraph"
                    },
                    {
                      "title": "Oxylabs",
                      "href": "/docs/tools/toolkits/web-scrape/oxylabs"
                    },
                    {
                      "title": "BrightData",
                      "href": "/docs/tools/toolkits/web-scrape/brightdata"
                    }
                  ]
                },
                {
                  "title": "Data",
                  "href": "/docs/tools/toolkits/database/csv",
                  "items": [
                    {
                      "title": "CSV",
                      "href": "/docs/tools/toolkits/database/csv"
                    },
                    {
                      "title": "DuckDb",
                      "href": "/docs/tools/toolkits/database/duckdb"
                    },
                    {
                      "title": "Google BigQuery",
                      "href": "/docs/tools/toolkits/database/google-bigquery"
                    },
                    {
                      "title": "Neo4j",
                      "href": "/docs/tools/toolkits/database/neo4j"
                    },
                    {
                      "title": "Pandas",
                      "href": "/docs/tools/toolkits/database/pandas"
                    },
                    {
                      "title": "Postgres",
                      "href": "/docs/tools/toolkits/database/postgres"
                    },
                    {
                      "title": "Redshift",
                      "href": "/docs/tools/toolkits/database/redshift"
                    },
                    {
                      "title": "SQL",
                      "href": "/docs/tools/toolkits/database/sql"
                    },
                    {
                      "title": "Zep",
                      "href": "/docs/tools/toolkits/database/zep"
                    }
                  ]
                },
                {
                  "title": "Local",
                  "href": "/docs/tools/toolkits/local/calculator",
                  "items": [
                    {
                      "title": "Calculator",
                      "href": "/docs/tools/toolkits/local/calculator"
                    },
                    {
                      "title": "Coding",
                      "href": "/docs/tools/toolkits/local/coding"
                    },
                    {
                      "title": "Docker",
                      "href": "/docs/tools/toolkits/local/docker"
                    },
                    {
                      "title": "File",
                      "href": "/docs/tools/toolkits/local/file"
                    },
                    {
                      "title": "Local File System",
                      "href": "/docs/tools/toolkits/local/local-file-system"
                    },
                    {
                      "title": "Python",
                      "href": "/docs/tools/toolkits/local/python"
                    },
                    {
                      "title": "Shell",
                      "href": "/docs/tools/toolkits/local/shell"
                    },
                    {
                      "title": "Sleep",
                      "href": "/docs/tools/toolkits/local/sleep"
                    },
                    {
                      "title": "Workspace",
                      "href": "/docs/tools/toolkits/local/workspace"
                    }
                  ]
                },
                {
                  "title": "File Generation",
                  "href": "/docs/tools/toolkits/file-generation/file-generation",
                  "items": [
                    {
                      "title": "File Generation",
                      "href": "/docs/tools/toolkits/file-generation/file-generation"
                    }
                  ]
                },
                {
                  "title": "Models",
                  "href": "/docs/tools/toolkits/models/azure-openai",
                  "items": [
                    {
                      "title": "Azure OpenAI",
                      "href": "/docs/tools/toolkits/models/azure-openai"
                    },
                    {
                      "title": "Gemini",
                      "href": "/docs/tools/toolkits/models/gemini"
                    },
                    {
                      "title": "Groq",
                      "href": "/docs/tools/toolkits/models/groq"
                    },
                    {
                      "title": "Morph",
                      "href": "/docs/tools/toolkits/models/morph"
                    },
                    {
                      "title": "Nebius",
                      "href": "/docs/tools/toolkits/models/nebius"
                    },
                    {
                      "title": "OpenAI",
                      "href": "/docs/tools/toolkits/models/openai"
                    }
                  ]
                },
                {
                  "title": "Additional Toolkits",
                  "href": "/docs/tools/toolkits/others/airflow",
                  "items": [
                    {
                      "title": "Airflow",
                      "href": "/docs/tools/toolkits/others/airflow"
                    },
                    {
                      "title": "Antigravity",
                      "href": "/docs/tools/toolkits/others/antigravity"
                    },
                    {
                      "title": "Apify",
                      "href": "/docs/tools/toolkits/others/apify"
                    },
                    {
                      "title": "AWS Lambda",
                      "href": "/docs/tools/toolkits/others/aws-lambda"
                    },
                    {
                      "title": "AWS SES",
                      "href": "/docs/tools/toolkits/others/aws-ses"
                    },
                    {
                      "title": "Bitbucket",
                      "href": "/docs/tools/toolkits/others/bitbucket"
                    },
                    {
                      "title": "Brandfetch",
                      "href": "/docs/tools/toolkits/others/brandfetch"
                    },
                    {
                      "title": "Cal.com",
                      "href": "/docs/tools/toolkits/others/calcom"
                    },
                    {
                      "title": "Cartesia",
                      "href": "/docs/tools/toolkits/others/cartesia"
                    },
                    {
                      "title": "ClickUp",
                      "href": "/docs/tools/toolkits/others/clickup"
                    },
                    {
                      "title": "Composio",
                      "href": "/docs/tools/toolkits/others/composio"
                    },
                    {
                      "title": "Confluence",
                      "href": "/docs/tools/toolkits/others/confluence"
                    },
                    {
                      "title": "Custom API",
                      "href": "/docs/tools/toolkits/others/custom-api"
                    },
                    {
                      "title": "Dalle",
                      "href": "/docs/tools/toolkits/others/dalle"
                    },
                    {
                      "title": "Daytona",
                      "href": "/docs/tools/toolkits/others/daytona"
                    },
                    {
                      "title": "Desi Vocal",
                      "href": "/docs/tools/toolkits/others/desi-vocal"
                    },
                    {
                      "title": "Docling",
                      "href": "/docs/tools/toolkits/others/docling"
                    },
                    {
                      "title": "Eleven Labs",
                      "href": "/docs/tools/toolkits/others/eleven-labs"
                    },
                    {
                      "title": "E2B",
                      "href": "/docs/tools/toolkits/others/e2b"
                    },
                    {
                      "title": "EVM (Ethereum Virtual Machine)",
                      "href": "/docs/tools/toolkits/others/evm"
                    },
                    {
                      "title": "Fal",
                      "href": "/docs/tools/toolkits/others/fal"
                    },
                    {
                      "title": "Financial Datasets API",
                      "href": "/docs/tools/toolkits/others/financial-datasets"
                    },
                    {
                      "title": "Giphy",
                      "href": "/docs/tools/toolkits/others/giphy"
                    },
                    {
                      "title": "Github",
                      "href": "/docs/tools/toolkits/others/github"
                    },
                    {
                      "title": "Gitlab",
                      "href": "/docs/tools/toolkits/others/gitlab"
                    },
                    {
                      "title": "Google Drive",
                      "href": "/docs/tools/toolkits/others/google-drive"
                    },
                    {
                      "title": "Google Maps",
                      "href": "/docs/tools/toolkits/others/google-maps"
                    },
                    {
                      "title": "Google Calendar",
                      "href": "/docs/tools/toolkits/others/googlecalendar"
                    },
                    {
                      "title": "Google Sheets",
                      "href": "/docs/tools/toolkits/others/google-sheets"
                    },
                    {
                      "title": "Google Slides",
                      "href": "/docs/tools/toolkits/others/google-slides"
                    },
                    {
                      "title": "Jira",
                      "href": "/docs/tools/toolkits/others/jira"
                    },
                    {
                      "title": "Knowledge Tools",
                      "href": "/docs/tools/toolkits/others/knowledge"
                    },
                    {
                      "title": "Linear",
                      "href": "/docs/tools/toolkits/others/linear"
                    },
                    {
                      "title": "LLMs.txt",
                      "href": "/docs/tools/toolkits/others/llms-txt"
                    },
                    {
                      "title": "Lumalabs",
                      "href": "/docs/tools/toolkits/others/lumalabs"
                    },
                    {
                      "title": "Mem0",
                      "href": "/docs/tools/toolkits/others/mem0"
                    },
                    {
                      "title": "MLX Transcribe",
                      "href": "/docs/tools/toolkits/others/mlx-transcribe"
                    },
                    {
                      "title": "ModelsLabs",
                      "href": "/docs/tools/toolkits/others/models-labs"
                    },
                    {
                      "title": "Nano Banana",
                      "href": "/docs/tools/toolkits/others/nano-banana"
                    },
                    {
                      "title": "MoviePy Video Tools",
                      "href": "/docs/tools/toolkits/others/moviepy"
                    },
                    {
                      "title": "Notion Tools",
                      "href": "/docs/tools/toolkits/others/notion"
                    },
                    {
                      "title": "OpenCV",
                      "href": "/docs/tools/toolkits/others/opencv"
                    },
                    {
                      "title": "OpenBB",
                      "href": "/docs/tools/toolkits/others/openbb"
                    },
                    {
                      "title": "OpenWeather",
                      "href": "/docs/tools/toolkits/others/openweather"
                    },
                    {
                      "title": "Reasoning",
                      "href": "/docs/tools/toolkits/others/reasoning"
                    },
                    {
                      "title": "Replicate",
                      "href": "/docs/tools/toolkits/others/replicate"
                    },
                    {
                      "title": "Resend",
                      "href": "/docs/tools/toolkits/others/resend"
                    },
                    {
                      "title": "Salesforce",
                      "href": "/docs/tools/toolkits/others/salesforce"
                    },
                    {
                      "title": "Scheduler",
                      "href": "/docs/tools/toolkits/others/scheduler"
                    },
                    {
                      "title": "Spotify",
                      "href": "/docs/tools/toolkits/others/spotify"
                    },
                    {
                      "title": "Shopify",
                      "href": "/docs/tools/toolkits/others/shopify"
                    },
                    {
                      "title": "Todoist",
                      "href": "/docs/tools/toolkits/others/todoist"
                    },
                    {
                      "title": "Trello",
                      "href": "/docs/tools/toolkits/others/trello"
                    },
                    {
                      "title": "User Control Flow",
                      "href": "/docs/tools/toolkits/others/user-control-flow"
                    },
                    {
                      "title": "User Feedback",
                      "href": "/docs/tools/toolkits/others/user-feedback"
                    },
                    {
                      "title": "Visualization",
                      "href": "/docs/tools/toolkits/others/visualization"
                    },
                    {
                      "title": "Web Browser Tools",
                      "href": "/docs/tools/toolkits/others/web-browser"
                    },
                    {
                      "title": "Web Tools",
                      "href": "/docs/tools/toolkits/others/webtools"
                    },
                    {
                      "title": "Yfinance",
                      "href": "/docs/tools/toolkits/others/yfinance"
                    },
                    {
                      "title": "Youtube",
                      "href": "/docs/tools/toolkits/others/youtube"
                    },
                    {
                      "title": "Zendesk",
                      "href": "/docs/tools/toolkits/others/zendesk"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Advanced",
      "items": [
        {
          "title": "Session Management",
          "href": "/docs/sessions/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/sessions/overview"
            },
            {
              "title": "Persisting Sessions",
              "href": "/docs/sessions/persisting-sessions/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/sessions/persisting-sessions/overview"
                },
                {
                  "title": "Storage Control",
                  "href": "/docs/sessions/persisting-sessions/storage-control"
                }
              ]
            },
            {
              "title": "Session Management",
              "href": "/docs/sessions/session-management"
            },
            {
              "title": "History Management",
              "href": "/docs/sessions/history-management"
            },
            {
              "title": "Session Summaries",
              "href": "/docs/sessions/session-summaries"
            },
            {
              "title": "Workflow Sessions",
              "href": "/docs/sessions/workflow-sessions"
            },
            {
              "title": "Metrics",
              "href": "/docs/sessions/metrics/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/sessions/metrics/overview"
                },
                {
                  "title": "Agent Metrics",
                  "href": "/docs/sessions/metrics/agent",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/sessions/metrics/agent"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/sessions/metrics/usage/agent-extra-metrics",
                      "items": [
                        {
                          "title": "Agent Extra Metrics",
                          "href": "/docs/sessions/metrics/usage/agent-extra-metrics"
                        },
                        {
                          "title": "Tool Call Metrics",
                          "href": "/docs/sessions/metrics/usage/agent-metrics"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Team Metrics",
                  "href": "/docs/sessions/metrics/team",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/sessions/metrics/team"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/sessions/metrics/usage/team-metrics",
                      "items": [
                        {
                          "title": "Team Tool Call Metrics",
                          "href": "/docs/sessions/metrics/usage/team-metrics"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Workflow Metrics",
                  "href": "/docs/sessions/metrics/workflow",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/sessions/metrics/workflow"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Context Management",
          "href": "/docs/context/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/context/overview"
            },
            {
              "title": "For Agents",
              "href": "/docs/context/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/context/agent/overview"
                },
                {
                  "title": "Basic Instructions",
                  "href": "/docs/context/agent/instructions"
                },
                {
                  "title": "Dynamic Instructions",
                  "href": "/docs/context/agent/dynamic-instructions"
                },
                {
                  "title": "Instructions via Function",
                  "href": "/docs/context/agent/instructions-via-function"
                },
                {
                  "title": "Few-Shot Learning",
                  "href": "/docs/context/agent/few-shot-learning"
                },
                {
                  "title": "Providing Datetime",
                  "href": "/docs/context/agent/datetime-instructions"
                },
                {
                  "title": "Providing Location",
                  "href": "/docs/context/agent/location-instructions"
                },
                {
                  "title": "Managing Tool Calls",
                  "href": "/docs/context/agent/filter-tool-calls-from-history"
                }
              ]
            },
            {
              "title": "For Teams",
              "href": "/docs/context/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/context/team/overview"
                },
                {
                  "title": "Managing Tool Calls",
                  "href": "/docs/context/team/filter-tool-calls-from-history"
                }
              ]
            }
          ]
        },
        {
          "title": "State Management",
          "href": "/docs/state/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/state/overview"
            },
            {
              "title": "For Agents",
              "href": "/docs/state/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/state/agent/overview"
                },
                {
                  "title": "Basic State",
                  "href": "/docs/state/agent/session-state-basic"
                },
                {
                  "title": "State in Instructions",
                  "href": "/docs/state/agent/session-state-in-instructions"
                },
                {
                  "title": "State in Context",
                  "href": "/docs/state/agent/session-state-in-context"
                },
                {
                  "title": "Advanced State",
                  "href": "/docs/state/agent/session-state-advanced"
                },
                {
                  "title": "Multiple Users",
                  "href": "/docs/state/agent/session-state-multiple-users"
                },
                {
                  "title": "Agentic State",
                  "href": "/docs/state/agent/agentic-session-state"
                },
                {
                  "title": "Dynamic State",
                  "href": "/docs/state/agent/dynamic-session-state"
                },
                {
                  "title": "Change State on Run",
                  "href": "/docs/state/agent/change-state-on-run"
                },
                {
                  "title": "Last N Messages",
                  "href": "/docs/state/agent/last-n-session-messages"
                }
              ]
            },
            {
              "title": "For Teams",
              "href": "/docs/state/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/state/team/overview"
                },
                {
                  "title": "Agentic State",
                  "href": "/docs/state/team/agentic-session-state"
                },
                {
                  "title": "Change State on Run",
                  "href": "/docs/state/team/change-state-on-run"
                },
                {
                  "title": "State in Instructions",
                  "href": "/docs/state/team/session-state-in-instructions"
                },
                {
                  "title": "Share Interactions",
                  "href": "/docs/state/team/share-member-interactions"
                }
              ]
            },
            {
              "title": "For Workflows",
              "href": "/docs/state/workflows/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/state/workflows/overview"
                },
                {
                  "title": "State in Custom Function",
                  "href": "/docs/state/workflows/access-session-state-in-custom-python-function-step"
                },
                {
                  "title": "State in Condition",
                  "href": "/docs/state/workflows/access-session-state-in-condition-evaluator-function"
                },
                {
                  "title": "State in Router",
                  "href": "/docs/state/workflows/access-session-state-in-router-selector-function"
                }
              ]
            }
          ]
        },
        {
          "title": "Chat History",
          "href": "/docs/history/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/history/overview"
            },
            {
              "title": "For Agents",
              "href": "/docs/history/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/history/agent/overview"
                },
                {
                  "title": "Chat History",
                  "href": "/docs/history/agent/chat-history"
                }
              ]
            },
            {
              "title": "For Teams",
              "href": "/docs/history/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/history/team/overview"
                },
                {
                  "title": "Direct Response + History",
                  "href": "/docs/history/team/respond-directly-with-history"
                },
                {
                  "title": "Team History",
                  "href": "/docs/history/team/team-history"
                },
                {
                  "title": "Member History",
                  "href": "/docs/history/team/history-of-members"
                },
                {
                  "title": "Share Member Interactions",
                  "href": "/docs/history/team/share-member-interactions"
                }
              ]
            },
            {
              "title": "For Workflows",
              "href": "/docs/history/workflow/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/history/workflow/overview"
                },
                {
                  "title": "Single Step Workflow",
                  "href": "/docs/history/workflow/single-step-continuous-execution-workflow"
                },
                {
                  "title": "Multi-Step Workflow",
                  "href": "/docs/history/workflow/workflow-with-history-enabled-for-steps"
                },
                {
                  "title": "Per-Step History",
                  "href": "/docs/history/workflow/enable-history-for-step"
                },
                {
                  "title": "History in Functions",
                  "href": "/docs/history/workflow/get-history-in-function"
                },
                {
                  "title": "Multi-Purpose CLI",
                  "href": "/docs/history/workflow/multi-purpose-cli"
                },
                {
                  "title": "Intent Routing",
                  "href": "/docs/history/workflow/intent-routing-with-history"
                }
              ]
            }
          ]
        },
        {
          "title": "Context Compression",
          "href": "/docs/compression/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/compression/overview"
            },
            {
              "title": "Token Counting",
              "href": "/docs/compression/token-counting"
            }
          ]
        },
        {
          "title": "Dependency Injection",
          "href": "/docs/dependencies/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/dependencies/overview"
            },
            {
              "title": "For Agents",
              "href": "/docs/dependencies/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/dependencies/agent/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/dependencies/agent/add-dependencies-run",
                  "items": [
                    {
                      "title": "Add on Run",
                      "href": "/docs/dependencies/agent/add-dependencies-run"
                    },
                    {
                      "title": "Add to Context",
                      "href": "/docs/dependencies/agent/add-dependencies-to-context"
                    },
                    {
                      "title": "Access in Tool",
                      "href": "/docs/dependencies/agent/access-dependencies-in-tool"
                    }
                  ]
                }
              ]
            },
            {
              "title": "For Teams",
              "href": "/docs/dependencies/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/dependencies/team/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/dependencies/team/add-dependencies-run",
                  "items": [
                    {
                      "title": "Add on Run",
                      "href": "/docs/dependencies/team/add-dependencies-run"
                    },
                    {
                      "title": "Add to Context",
                      "href": "/docs/dependencies/team/add-dependencies-to-context"
                    },
                    {
                      "title": "Reference Dependencies",
                      "href": "/docs/dependencies/team/reference-dependencies"
                    },
                    {
                      "title": "Access in Tool",
                      "href": "/docs/dependencies/team/access-dependencies-in-tool"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Hooks",
          "href": "/docs/hooks/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/hooks/overview"
            },
            {
              "title": "Agent",
              "href": "/docs/hooks/usage/agent/input-validation-pre-hook",
              "items": [
                {
                  "title": "Input Validation Pre-Hook",
                  "href": "/docs/hooks/usage/agent/input-validation-pre-hook"
                },
                {
                  "title": "Input Transformation Pre-Hook",
                  "href": "/docs/hooks/usage/agent/input-transformation-pre-hook"
                },
                {
                  "title": "Output Validation Post-Hook",
                  "href": "/docs/hooks/usage/agent/output-validation-post-hook"
                },
                {
                  "title": "Output Transformation Post-Hook",
                  "href": "/docs/hooks/usage/agent/output-transformation-post-hook"
                }
              ]
            },
            {
              "title": "Team",
              "href": "/docs/hooks/usage/team/input-validation-pre-hook",
              "items": [
                {
                  "title": "Input Validation Pre-Hook",
                  "href": "/docs/hooks/usage/team/input-validation-pre-hook"
                },
                {
                  "title": "Input Transformation Pre-Hook",
                  "href": "/docs/hooks/usage/team/input-transformation-pre-hook"
                },
                {
                  "title": "Output Validation Post-Hook",
                  "href": "/docs/hooks/usage/team/output-validation-post-hook"
                },
                {
                  "title": "Output Transformation Post-Hook",
                  "href": "/docs/hooks/usage/team/output-transformation-post-hook"
                }
              ]
            }
          ]
        },
        {
          "title": "Run Cancellation",
          "href": "/docs/run-cancellation/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/run-cancellation/overview"
            },
            {
              "title": "Cancel Agent Run",
              "href": "/docs/run-cancellation/agent-cancel-run"
            },
            {
              "title": "Cancel Team Run",
              "href": "/docs/run-cancellation/team-cancel-run"
            },
            {
              "title": "Cancel Workflow Run",
              "href": "/docs/run-cancellation/workflow-cancel-run"
            }
          ]
        },
        {
          "title": "Background Execution",
          "href": "/docs/background-execution/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/background-execution/overview"
            }
          ]
        },
        {
          "title": "Skills",
          "href": "/docs/skills/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/skills/overview"
            },
            {
              "title": "Creating Skills",
              "href": "/docs/skills/creating-skills"
            },
            {
              "title": "Loading Skills",
              "href": "/docs/skills/loading-skills"
            },
            {
              "title": "Team Skills",
              "href": "/docs/skills/team-skills"
            }
          ]
        },
        {
          "title": "Reasoning",
          "href": "/docs/reasoning/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/reasoning/overview"
            },
            {
              "title": "Reasoning Models",
              "href": "/docs/reasoning/reasoning-models",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/reasoning/reasoning-models"
                },
                {
                  "title": "Usage",
                  "href": "/docs/reasoning/usage/models/azure-ai-foundry/azure-ai-foundry",
                  "items": [
                    {
                      "title": "Azure AI Foundry",
                      "href": "/docs/reasoning/usage/models/azure-ai-foundry/azure-ai-foundry",
                      "items": [
                        {
                          "title": "Azure AI Foundry",
                          "href": "/docs/reasoning/usage/models/azure-ai-foundry/azure-ai-foundry"
                        }
                      ]
                    },
                    {
                      "title": "Azure OpenAI",
                      "href": "/docs/reasoning/usage/models/azure-openai/o1",
                      "items": [
                        {
                          "title": "Azure OpenAI o1",
                          "href": "/docs/reasoning/usage/models/azure-openai/o1"
                        },
                        {
                          "title": "Azure OpenAI o3",
                          "href": "/docs/reasoning/usage/models/azure-openai/o3"
                        },
                        {
                          "title": "Azure OpenAI GPT 4.1",
                          "href": "/docs/reasoning/usage/models/azure-openai/reasoning-model-gpt4-1"
                        }
                      ]
                    },
                    {
                      "title": "DeepSeek",
                      "href": "/docs/reasoning/usage/models/deepseek/deepseek-reasoner",
                      "items": [
                        {
                          "title": "DeepSeek Reasoner",
                          "href": "/docs/reasoning/usage/models/deepseek/deepseek-reasoner"
                        }
                      ]
                    },
                    {
                      "title": "Groq",
                      "href": "/docs/reasoning/usage/models/groq/groq",
                      "items": [
                        {
                          "title": "Groq DeepSeek R1",
                          "href": "/docs/reasoning/usage/models/groq/groq"
                        },
                        {
                          "title": "Groq Claude + DeepSeek R1",
                          "href": "/docs/reasoning/usage/models/groq/groq-plus-claude"
                        }
                      ]
                    },
                    {
                      "title": "Ollama",
                      "href": "/docs/reasoning/usage/models/ollama/ollama",
                      "items": [
                        {
                          "title": "Ollama DeepSeek R1",
                          "href": "/docs/reasoning/usage/models/ollama/ollama"
                        }
                      ]
                    },
                    {
                      "title": "OpenAI",
                      "href": "/docs/reasoning/usage/models/openai/o1-pro",
                      "items": [
                        {
                          "title": "OpenAI o1 pro",
                          "href": "/docs/reasoning/usage/models/openai/o1-pro"
                        },
                        {
                          "title": "OpenAI GPT-5-mini",
                          "href": "/docs/reasoning/usage/models/openai/gpt5-mini"
                        },
                        {
                          "title": "OpenAI gpt-5-mini with Tools",
                          "href": "/docs/reasoning/usage/models/openai/gpt5-mini-tools"
                        },
                        {
                          "title": "OpenAI o4-mini",
                          "href": "/docs/reasoning/usage/models/openai/o4-mini"
                        },
                        {
                          "title": "OpenAI GPT-4.1",
                          "href": "/docs/reasoning/usage/models/openai/reasoning-model-gpt4-1"
                        },
                        {
                          "title": "OpenAI o4-mini with reasoning summary",
                          "href": "/docs/reasoning/usage/models/openai/reasoning-summary"
                        },
                        {
                          "title": "OpenAI gpt-5-mini with reasoning effort",
                          "href": "/docs/reasoning/usage/models/openai/reasoning-effort"
                        }
                      ]
                    },
                    {
                      "title": "xAI",
                      "href": "/docs/reasoning/usage/models/xai/reasoning-effort",
                      "items": [
                        {
                          "title": "xAI Grok 3 Mini",
                          "href": "/docs/reasoning/usage/models/xai/reasoning-effort"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Reasoning Tools",
              "href": "/docs/reasoning/reasoning-tools",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/reasoning/reasoning-tools"
                },
                {
                  "title": "Usage",
                  "href": "/docs/reasoning/usage/tools/reasoning-tools",
                  "items": [
                    {
                      "title": "Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/reasoning-tools"
                    },
                    {
                      "title": "Azure OpenAI with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/azure-openai-reasoning-tools"
                    },
                    {
                      "title": "Ollama with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/ollama-reasoning-tools"
                    },
                    {
                      "title": "OpenAI with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/openai-reasoning-tools"
                    },
                    {
                      "title": "Vercel with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/vercel-reasoning-tools"
                    },
                    {
                      "title": "Cerebras Llama with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/cerebras-llama-reasoning-tools"
                    },
                    {
                      "title": "Claude with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/claude-reasoning-tools"
                    },
                    {
                      "title": "Gemini with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/gemini-reasoning-tools"
                    },
                    {
                      "title": "Groq with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/groq-reasoning-tools"
                    },
                    {
                      "title": "Capture Reasoning Content with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/capture-reasoning-content-reasoning-tools"
                    },
                    {
                      "title": "Reasoning Agent with Knowledge Tools",
                      "href": "/docs/reasoning/usage/tools/knowledge-tools"
                    },
                    {
                      "title": "Capture Reasoning Content with Knowledge Tools",
                      "href": "/docs/reasoning/usage/tools/capture-reasoning-content-knowledge-tools"
                    },
                    {
                      "title": "Team with Reasoning Tools",
                      "href": "/docs/reasoning/usage/tools/reasoning-tool-team"
                    },
                    {
                      "title": "Team with Knowledge Tools",
                      "href": "/docs/reasoning/usage/tools/knowledge-tool-team"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Reasoning Agents",
              "href": "/docs/reasoning/reasoning-agents",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/reasoning/reasoning-agents"
                },
                {
                  "title": "Usage",
                  "href": "/docs/reasoning/usage/agents/basic-cot",
                  "items": [
                    {
                      "title": "Agent with Reasoning",
                      "href": "/docs/reasoning/usage/agents/basic-cot"
                    },
                    {
                      "title": "Capture Reasoning Content",
                      "href": "/docs/reasoning/usage/agents/capture-reasoning-content-cot"
                    },
                    {
                      "title": "Non-Reasoning Model Agent",
                      "href": "/docs/reasoning/usage/agents/non-reasoning-model-cot"
                    },
                    {
                      "title": "Team with Chain of Thought",
                      "href": "/docs/reasoning/usage/agents/team-cot"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Multimodal",
          "href": "/docs/multimodal/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/multimodal/overview"
            },
            {
              "title": "Agents",
              "href": "/docs/multimodal/agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/multimodal/agent/overview"
                },
                {
                  "title": "Image",
                  "href": "/docs/multimodal/agent/usage/image-input",
                  "items": [
                    {
                      "title": "Image Input",
                      "href": "/docs/multimodal/agent/usage/image-input"
                    },
                    {
                      "title": "Image Model Output",
                      "href": "/docs/multimodal/agent/usage/image-output"
                    },
                    {
                      "title": "Image to Text Analysis",
                      "href": "/docs/multimodal/agent/usage/image-to-text"
                    },
                    {
                      "title": "Image to Structured Output",
                      "href": "/docs/multimodal/agent/usage/image-to-structured-output"
                    },
                    {
                      "title": "High Fidelity Image Input",
                      "href": "/docs/multimodal/agent/usage/image-input-high-fidelity"
                    },
                    {
                      "title": "Image to Image Generation Agent",
                      "href": "/docs/multimodal/agent/usage/image-to-image-agent"
                    },
                    {
                      "title": "Image Input for Tools",
                      "href": "/docs/multimodal/agent/usage/image-input-for-tool"
                    },
                    {
                      "title": "Image to Audio Story Generation",
                      "href": "/docs/multimodal/agent/usage/image-to-audio"
                    },
                    {
                      "title": "Image Generation",
                      "href": "/docs/multimodal/agent/usage/image-generation"
                    },
                    {
                      "title": "Generate output image using DALL-E",
                      "href": "/docs/multimodal/agent/usage/generate-image"
                    },
                    {
                      "title": "Generate output image using DALL-E with intermediate steps",
                      "href": "/docs/multimodal/agent/usage/generate-image-with-intermediate-steps"
                    },
                    {
                      "title": "Agent Using Multimodal Tool Response in Runs",
                      "href": "/docs/multimodal/agent/usage/agent-using-multimodal-tool-response-in-runs"
                    }
                  ]
                },
                {
                  "title": "Audio",
                  "href": "/docs/multimodal/agent/usage/audio_input",
                  "items": [
                    {
                      "title": "Audio Input",
                      "href": "/docs/multimodal/agent/usage/audio_input"
                    },
                    {
                      "title": "Audio Model Output",
                      "href": "/docs/multimodal/agent/usage/audio_output"
                    },
                    {
                      "title": "Audio Input Output",
                      "href": "/docs/multimodal/agent/usage/audio-input-output"
                    },
                    {
                      "title": "Audio to Text Transcription",
                      "href": "/docs/multimodal/agent/usage/audio-to-text"
                    },
                    {
                      "title": "Audio Generation",
                      "href": "/docs/multimodal/agent/usage/audio_generation"
                    },
                    {
                      "title": "Generate Music using Models Lab",
                      "href": "/docs/multimodal/agent/usage/generate-music-agent"
                    },
                    {
                      "title": "Audio Multi Turn",
                      "href": "/docs/multimodal/agent/usage/audio-multi-turn"
                    },
                    {
                      "title": "Audio Sentiment Analysis",
                      "href": "/docs/multimodal/agent/usage/audio-sentiment-analysis"
                    },
                    {
                      "title": "Audio Streaming",
                      "href": "/docs/multimodal/agent/usage/audio-streaming"
                    }
                  ]
                },
                {
                  "title": "Video",
                  "href": "/docs/multimodal/agent/usage/video_input",
                  "items": [
                    {
                      "title": "Video Input",
                      "href": "/docs/multimodal/agent/usage/video_input"
                    },
                    {
                      "title": "Video Output",
                      "href": "/docs/multimodal/agent/usage/video_generation"
                    },
                    {
                      "title": "Video Caption Agent",
                      "href": "/docs/multimodal/agent/usage/video-caption"
                    },
                    {
                      "title": "Shorts from Video",
                      "href": "/docs/multimodal/agent/usage/video-to-shorts"
                    },
                    {
                      "title": "Generate Video (ReplicateTools)",
                      "href": "/docs/multimodal/agent/usage/generate-video-using-replicate"
                    },
                    {
                      "title": "Generate Video (ModelsLabTools)",
                      "href": "/docs/multimodal/agent/usage/generate-video-using-models-lab"
                    }
                  ]
                },
                {
                  "title": "Files",
                  "href": "/docs/multimodal/agent/usage/file-input-for-tool",
                  "items": [
                    {
                      "title": "File Input for Tools",
                      "href": "/docs/multimodal/agent/usage/file-input-for-tool"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Teams",
              "href": "/docs/multimodal/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/multimodal/team/overview"
                },
                {
                  "title": "Images",
                  "href": "/docs/multimodal/team/usage/image-to-text",
                  "items": [
                    {
                      "title": "Image to Text",
                      "href": "/docs/multimodal/team/usage/image-to-text"
                    },
                    {
                      "title": "Image Generation",
                      "href": "/docs/multimodal/team/usage/generate-image-with-team"
                    },
                    {
                      "title": "Image to StructuredText",
                      "href": "/docs/multimodal/team/usage/image-to-structured-output"
                    },
                    {
                      "title": "Image Transformation",
                      "href": "/docs/multimodal/team/usage/image-to-image-transformation"
                    }
                  ]
                },
                {
                  "title": "Audio",
                  "href": "/docs/multimodal/team/usage/audio-to-text",
                  "items": [
                    {
                      "title": "Audio Transcription",
                      "href": "/docs/multimodal/team/usage/audio-to-text"
                    },
                    {
                      "title": "Audio Sentiment Analysis",
                      "href": "/docs/multimodal/team/usage/audio-sentiment-analysis"
                    }
                  ]
                },
                {
                  "title": "Video",
                  "href": "/docs/multimodal/team/usage/video-caption-generation",
                  "items": [
                    {
                      "title": "Video Captioning",
                      "href": "/docs/multimodal/team/usage/video-caption-generation"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Production",
      "items": [
        {
          "title": "Guardrails",
          "href": "/docs/guardrails/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/guardrails/overview"
            },
            {
              "title": "Included Guardrails",
              "href": "/docs/guardrails/included/prompt-injection",
              "items": [
                {
                  "title": "Prompt Injection",
                  "href": "/docs/guardrails/included/prompt-injection"
                },
                {
                  "title": "PII Detection",
                  "href": "/docs/guardrails/included/pii"
                },
                {
                  "title": "OpenAI Moderation",
                  "href": "/docs/guardrails/included/openai-moderation"
                }
              ]
            },
            {
              "title": "Agent",
              "href": "/docs/guardrails/usage/agent/pii-detection",
              "items": [
                {
                  "title": "PII Detection",
                  "href": "/docs/guardrails/usage/agent/pii-detection"
                },
                {
                  "title": "Prompt Injection",
                  "href": "/docs/guardrails/usage/agent/prompt-injection"
                },
                {
                  "title": "OpenAI Moderation",
                  "href": "/docs/guardrails/usage/agent/openai-moderation"
                }
              ]
            },
            {
              "title": "Team",
              "href": "/docs/guardrails/usage/team/pii-detection",
              "items": [
                {
                  "title": "PII Detection (Team)",
                  "href": "/docs/guardrails/usage/team/pii-detection"
                },
                {
                  "title": "Prompt Injection (Team)",
                  "href": "/docs/guardrails/usage/team/prompt-injection"
                },
                {
                  "title": "OpenAI Moderation (Team)",
                  "href": "/docs/guardrails/usage/team/openai-moderation"
                }
              ]
            }
          ]
        },
        {
          "title": "Human-in-the-Loop",
          "href": "/docs/hitl/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/hitl/overview"
            },
            {
              "title": "User Confirmation",
              "href": "/docs/hitl/user-confirmation"
            },
            {
              "title": "User Input",
              "href": "/docs/hitl/user-input"
            },
            {
              "title": "Dynamic User Input",
              "href": "/docs/hitl/dynamic-user-input"
            },
            {
              "title": "External Execution",
              "href": "/docs/hitl/external-execution"
            },
            {
              "title": "Approval",
              "href": "/docs/hitl/approval"
            },
            {
              "title": "Usage",
              "href": "/docs/hitl/usage/agentic-user-input",
              "items": [
                {
                  "title": "Agentic User Input",
                  "href": "/docs/hitl/usage/agentic-user-input"
                },
                {
                  "title": "Confirmation Required",
                  "href": "/docs/hitl/usage/confirmation-required",
                  "items": [
                    {
                      "title": "Confirmation Required",
                      "href": "/docs/hitl/usage/confirmation-required"
                    },
                    {
                      "title": "Async Confirmation",
                      "href": "/docs/hitl/usage/confirmation-required-async"
                    },
                    {
                      "title": "Mixed Tools Confirmation",
                      "href": "/docs/hitl/usage/confirmation-required-mixed-tools"
                    },
                    {
                      "title": "Multiple Tools Confirmation",
                      "href": "/docs/hitl/usage/confirmation-required-multiple-tools"
                    },
                    {
                      "title": "Stream Confirmation",
                      "href": "/docs/hitl/usage/confirmation-required-stream-async"
                    },
                    {
                      "title": "Confirmation in Toolkit",
                      "href": "/docs/hitl/usage/confirmation-required-toolkit"
                    },
                    {
                      "title": "Confirmation with History",
                      "href": "/docs/hitl/usage/confirmation-required-with-history"
                    },
                    {
                      "title": "Confirmation with Run ID",
                      "href": "/docs/hitl/usage/confirmation-required-with-run-id"
                    }
                  ]
                },
                {
                  "title": "User Input Required",
                  "href": "/docs/hitl/usage/user-input-required",
                  "items": [
                    {
                      "title": "User Input Required",
                      "href": "/docs/hitl/usage/user-input-required"
                    },
                    {
                      "title": "User Input All Fields",
                      "href": "/docs/hitl/usage/user-input-required-all-fields"
                    },
                    {
                      "title": "User Input Async",
                      "href": "/docs/hitl/usage/user-input-required-async"
                    },
                    {
                      "title": "User Input Stream",
                      "href": "/docs/hitl/usage/user-input-required-stream-async"
                    }
                  ]
                },
                {
                  "title": "External Tool Execution",
                  "href": "/docs/hitl/usage/external-tool-execution",
                  "items": [
                    {
                      "title": "External Execution",
                      "href": "/docs/hitl/usage/external-tool-execution"
                    },
                    {
                      "title": "External Execution (Async)",
                      "href": "/docs/hitl/usage/external-tool-execution-async"
                    },
                    {
                      "title": "External Execution (Stream)",
                      "href": "/docs/hitl/usage/external-tool-execution-stream-async"
                    },
                    {
                      "title": "External Execution (Toolkit)",
                      "href": "/docs/hitl/usage/external-tool-execution-toolkit"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Evals",
          "href": "/docs/evals/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/evals/overview"
            },
            {
              "title": "Accuracy",
              "href": "/docs/evals/accuracy/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/evals/accuracy/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/evals/accuracy/usage/basic",
                  "items": [
                    {
                      "title": "Basic Accuracy",
                      "href": "/docs/evals/accuracy/usage/basic"
                    },
                    {
                      "title": "Async Accuracy Evaluation",
                      "href": "/docs/evals/accuracy/usage/accuracy-async"
                    },
                    {
                      "title": "Comparison Accuracy Evaluation",
                      "href": "/docs/evals/accuracy/usage/accuracy-comparison"
                    },
                    {
                      "title": "Accuracy with Database Logging",
                      "href": "/docs/evals/accuracy/usage/accuracy-db-logging"
                    },
                    {
                      "title": "Accuracy with Given Answer",
                      "href": "/docs/evals/accuracy/usage/accuracy-with-given-answer"
                    },
                    {
                      "title": "Accuracy with Tools",
                      "href": "/docs/evals/accuracy/usage/accuracy-with-tools"
                    },
                    {
                      "title": "Accuracy with Teams",
                      "href": "/docs/evals/accuracy/usage/accuracy-with-teams"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Performance",
              "href": "/docs/evals/performance/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/evals/performance/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/evals/performance/usage/performance-simple-response",
                  "items": [
                    {
                      "title": "Performance on Agent Response",
                      "href": "/docs/evals/performance/usage/performance-simple-response"
                    },
                    {
                      "title": "Async Performance Evaluation",
                      "href": "/docs/evals/performance/usage/performance-async"
                    },
                    {
                      "title": "Performance on Agent Instantiation",
                      "href": "/docs/evals/performance/usage/performance-agent-instantiation"
                    },
                    {
                      "title": "Performance on Agent Instantiation with Tool",
                      "href": "/docs/evals/performance/usage/performance-instantiation-with-tool"
                    },
                    {
                      "title": "Performance on Agent with Storage",
                      "href": "/docs/evals/performance/usage/performance-with-storage"
                    },
                    {
                      "title": "Performance with Memory Updates",
                      "href": "/docs/evals/performance/usage/performance-with-memory"
                    },
                    {
                      "title": "Performance with Teams",
                      "href": "/docs/evals/performance/usage/performance-team-instantiation"
                    },
                    {
                      "title": "Team Performance with Memory",
                      "href": "/docs/evals/performance/usage/performance-team-with-memory"
                    },
                    {
                      "title": "Performance with Database Logging",
                      "href": "/docs/evals/performance/usage/performance-db-logging"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Reliability",
              "href": "/docs/evals/reliability/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/evals/reliability/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/evals/reliability/usage/basic",
                  "items": [
                    {
                      "title": "Reliability with Single Tool",
                      "href": "/docs/evals/reliability/usage/basic"
                    },
                    {
                      "title": "Async Reliability Evaluation",
                      "href": "/docs/evals/reliability/usage/reliability-async"
                    },
                    {
                      "title": "Reliability with Database Logging",
                      "href": "/docs/evals/reliability/usage/reliability-db-logging"
                    },
                    {
                      "title": "Single Tool Reliability",
                      "href": "/docs/evals/reliability/usage/reliability-single-tool"
                    },
                    {
                      "title": "Reliability with Multiple Tools",
                      "href": "/docs/evals/reliability/usage/reliability-with-multiple-tools"
                    },
                    {
                      "title": "Reliability with Teams",
                      "href": "/docs/evals/reliability/usage/reliability-with-teams"
                    },
                    {
                      "title": "Team Reliability with Stock Tools",
                      "href": "/docs/evals/reliability/usage/reliability-team-advanced"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Agent as Judge",
              "href": "/docs/evals/agent-as-judge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/evals/agent-as-judge/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-basic",
                  "items": [
                    {
                      "title": "Basic Agent as Judge",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-basic"
                    },
                    {
                      "title": "Async Agent as Judge",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-async"
                    },
                    {
                      "title": "Binary Agent as Judge",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-binary"
                    },
                    {
                      "title": "Batch Agent as Judge",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-batch"
                    },
                    {
                      "title": "Agent as Judge with Custom Evaluator",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-custom-evaluator"
                    },
                    {
                      "title": "Agent as Judge with Guidelines",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-with-guidelines"
                    },
                    {
                      "title": "Agent as Judge as Post-Hook",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-post-hook"
                    },
                    {
                      "title": "Agent as Judge with Teams",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-team"
                    },
                    {
                      "title": "Async Team Post-Hook Agent as Judge",
                      "href": "/docs/evals/agent-as-judge/usage/agent-as-judge-team-post-hook-async"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Tracing",
          "href": "/docs/tracing/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/tracing/overview"
            },
            {
              "title": "Basic Setup",
              "href": "/docs/tracing/basic-setup"
            },
            {
              "title": "Accessing your Traces",
              "href": "/docs/tracing/db-functions"
            },
            {
              "title": "Usage",
              "href": "/docs/tracing/usage/basic-agent-tracing",
              "items": [
                {
                  "title": "Basic Agent Tracing",
                  "href": "/docs/tracing/usage/basic-agent-tracing"
                },
                {
                  "title": "Basic Team Tracing",
                  "href": "/docs/tracing/usage/basic-team-tracing"
                },
                {
                  "title": "Basic Workflow Tracing",
                  "href": "/docs/tracing/usage/basic-workflow-tracing"
                }
              ]
            }
          ]
        },
        {
          "title": "Scheduler",
          "href": "/docs/scheduler/overview"
        }
      ]
    },
    {
      "group": "Providers",
      "items": [
        {
          "title": "Model Providers",
          "href": "/docs/models/providers/model-index",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/models/providers/model-index"
            },
            {
              "title": "Native Model Providers",
              "href": "/docs/models/providers/native/anthropic/overview",
              "items": [
                {
                  "title": "Anthropic",
                  "href": "/docs/models/providers/native/anthropic/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/anthropic/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/anthropic/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/anthropic/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/anthropic/usage/basic-stream"
                        },
                        {
                          "title": "Beta Features",
                          "href": "/docs/models/providers/native/anthropic/usage/betas"
                        },
                        {
                          "title": "Code Execution Tool",
                          "href": "/docs/models/providers/native/anthropic/usage/code-execution"
                        },
                        {
                          "title": "Context Editing",
                          "href": "/docs/models/providers/native/anthropic/usage/context-management"
                        },
                        {
                          "title": "Claude Agent Skills",
                          "href": "/docs/models/providers/native/anthropic/usage/skills"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/anthropic/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/native/anthropic/usage/structured-output"
                        },
                        {
                          "title": "Agent with Structured Outputs Streaming",
                          "href": "/docs/models/providers/native/anthropic/usage/structured-output-stream"
                        },
                        {
                          "title": "Agent with Structured Outputs and Strict Tools",
                          "href": "/docs/models/providers/native/anthropic/usage/structured-output-strict-tools"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/native/anthropic/usage/knowledge"
                        },
                        {
                          "title": "File Upload",
                          "href": "/docs/models/providers/native/anthropic/usage/file-upload"
                        },
                        {
                          "title": "Image Input Bytes Content",
                          "href": "/docs/models/providers/native/anthropic/usage/image-input-bytes"
                        },
                        {
                          "title": "Image Input URL",
                          "href": "/docs/models/providers/native/anthropic/usage/image-input-url"
                        },
                        {
                          "title": "PDF Input Bytes Agent",
                          "href": "/docs/models/providers/native/anthropic/usage/pdf-input-bytes"
                        },
                        {
                          "title": "PDF Input Local Agent",
                          "href": "/docs/models/providers/native/anthropic/usage/pdf-input-local"
                        },
                        {
                          "title": "PDF Input URL Agent",
                          "href": "/docs/models/providers/native/anthropic/usage/pdf-input-url"
                        },
                        {
                          "title": "Prompt Caching",
                          "href": "/docs/models/providers/native/anthropic/usage/prompt-caching"
                        },
                        {
                          "title": "Response Caching",
                          "href": "/docs/models/providers/native/anthropic/usage/cache-response"
                        },
                        {
                          "title": "Web Fetch",
                          "href": "/docs/models/providers/native/anthropic/usage/web-fetch"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Cohere",
                  "href": "/docs/models/providers/native/cohere/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/cohere/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/cohere/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/cohere/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/cohere/usage/basic-stream"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/native/cohere/usage/image-agent"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/cohere/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/native/cohere/usage/structured-output"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/native/cohere/usage/storage"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/native/cohere/usage/knowledge"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dashscope",
                  "href": "/docs/models/providers/native/dashscope/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/dashscope/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/dashscope/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/dashscope/usage/basic"
                        },
                        {
                          "title": "Basic Agent with Streaming",
                          "href": "/docs/models/providers/native/dashscope/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/dashscope/usage/tool-use"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/native/dashscope/usage/image-agent"
                        },
                        {
                          "title": "Image Agent with Bytes",
                          "href": "/docs/models/providers/native/dashscope/usage/image-agent-bytes"
                        },
                        {
                          "title": "Structured Output Agent",
                          "href": "/docs/models/providers/native/dashscope/usage/structured-output"
                        },
                        {
                          "title": "Thinking Agent",
                          "href": "/docs/models/providers/native/dashscope/usage/thinking-agent"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "DeepSeek",
                  "href": "/docs/models/providers/native/deepseek/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/deepseek/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/deepseek/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/deepseek/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/deepseek/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/deepseek/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/native/deepseek/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Google",
                  "href": "/docs/models/providers/native/google/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/google/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/google/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/google/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/google/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/native/google/usage/structured-output"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/google/usage/tool-use"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/native/google/usage/storage"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/native/google/usage/knowledge"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/native/google/usage/image-input"
                        },
                        {
                          "title": "Image Agent with File Upload",
                          "href": "/docs/models/providers/native/google/usage/image-input-file-upload"
                        },
                        {
                          "title": "Image Generation Agent",
                          "href": "/docs/models/providers/native/google/usage/image-generation"
                        },
                        {
                          "title": "Image Generation Agent (Streaming)",
                          "href": "/docs/models/providers/native/google/usage/image-generation-stream"
                        },
                        {
                          "title": "Image Editing Agent",
                          "href": "/docs/models/providers/native/google/usage/image-editing"
                        },
                        {
                          "title": "Imagen Tool with OpenAI",
                          "href": "/docs/models/providers/native/google/usage/imagen-tool"
                        },
                        {
                          "title": "Advanced Imagen Tool with Vertex AI",
                          "href": "/docs/models/providers/native/google/usage/imagen-tool-advanced"
                        },
                        {
                          "title": "Agent with Vertex AI",
                          "href": "/docs/models/providers/native/google/usage/vertexai"
                        },
                        {
                          "title": "Agent with Grounding",
                          "href": "/docs/models/providers/native/google/usage/grounding"
                        },
                        {
                          "title": "Agent with URL Context",
                          "href": "/docs/models/providers/native/google/usage/url-context"
                        },
                        {
                          "title": "Agent with URL Context and Search",
                          "href": "/docs/models/providers/native/google/usage/url-context-with-search"
                        },
                        {
                          "title": "Flash Thinking Agent",
                          "href": "/docs/models/providers/native/google/usage/flash-thinking"
                        },
                        {
                          "title": "Audio Input (Bytes Content)",
                          "href": "/docs/models/providers/native/google/usage/audio-input-bytes-content"
                        },
                        {
                          "title": "Audio Input (Upload the file)",
                          "href": "/docs/models/providers/native/google/usage/audio-input-file-upload"
                        },
                        {
                          "title": "Audio Input (Local file)",
                          "href": "/docs/models/providers/native/google/usage/audio-input-local-file-upload"
                        },
                        {
                          "title": "Agent with PDF Input (Local file)",
                          "href": "/docs/models/providers/native/google/usage/pdf-input-local"
                        },
                        {
                          "title": "Agent with PDF Input (URL)",
                          "href": "/docs/models/providers/native/google/usage/pdf-input-url"
                        },
                        {
                          "title": "Agent with GCS File Input",
                          "href": "/docs/models/providers/native/google/usage/gcs-file-input"
                        },
                        {
                          "title": "Agent with External URL Input",
                          "href": "/docs/models/providers/native/google/usage/external-url-input"
                        },
                        {
                          "title": "Agent with S3 Pre-signed URL Input",
                          "href": "/docs/models/providers/native/google/usage/s3-presigned-url-input"
                        },
                        {
                          "title": "Video Input (Bytes Content)",
                          "href": "/docs/models/providers/native/google/usage/video-input-bytes-content"
                        },
                        {
                          "title": "Video Input (File Upload)",
                          "href": "/docs/models/providers/native/google/usage/video-input-file-upload"
                        },
                        {
                          "title": "Video Input (Local File Upload)",
                          "href": "/docs/models/providers/native/google/usage/video-input-local-file-upload"
                        }
                      ]
                    },
                    {
                      "title": "Interactions API",
                      "href": "/docs/models/providers/native/google/gemini-interactions"
                    },
                    {
                      "title": "Interactions Usage",
                      "href": "/docs/models/providers/native/google/usage/interactions-basic",
                      "items": [
                        {
                          "title": "Basic Agent (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-basic"
                        },
                        {
                          "title": "Agent with Tools (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-tool-use"
                        },
                        {
                          "title": "Multi-turn Conversation (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-multi-turn"
                        },
                        {
                          "title": "Thinking (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-thinking"
                        },
                        {
                          "title": "Google Search (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-search"
                        },
                        {
                          "title": "Structured Output (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-structured-output"
                        },
                        {
                          "title": "Deep Research (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research"
                        },
                        {
                          "title": "Deep Research Streaming (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-streaming"
                        },
                        {
                          "title": "Deep Research Multi-turn (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-multi-turn"
                        },
                        {
                          "title": "Deep Research Collaborative Planning (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-collaborative-planning"
                        },
                        {
                          "title": "Deep Research with File Search (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-file-search"
                        },
                        {
                          "title": "Deep Research with MCP (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-mcp"
                        },
                        {
                          "title": "Deep Research Multimodal Input (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-multimodal"
                        },
                        {
                          "title": "Deep Research Visualization (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-deep-research-visualization"
                        },
                        {
                          "title": "Antigravity (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-antigravity"
                        },
                        {
                          "title": "Antigravity Streaming (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-antigravity-streaming"
                        },
                        {
                          "title": "Antigravity Multi-turn (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-antigravity-multi-turn"
                        },
                        {
                          "title": "Antigravity Environment Config (Interactions)",
                          "href": "/docs/models/providers/native/google/usage/interactions-antigravity-environment-config"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Meta",
                  "href": "/docs/models/providers/native/meta/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/meta/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/meta/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/meta/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/meta/usage/basic-stream"
                        },
                        {
                          "title": "Asynchronous Agent",
                          "href": "/docs/models/providers/native/meta/usage/async-basic"
                        },
                        {
                          "title": "Asynchronous Streaming Agent",
                          "href": "/docs/models/providers/native/meta/usage/async-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/meta/usage/tool-use"
                        },
                        {
                          "title": "Agent with Async Tool Usage",
                          "href": "/docs/models/providers/native/meta/usage/async-tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/native/meta/usage/structured-output"
                        },
                        {
                          "title": "Agent with Image Input",
                          "href": "/docs/models/providers/native/meta/usage/image-input-bytes"
                        },
                        {
                          "title": "Agent With Knowledge",
                          "href": "/docs/models/providers/native/meta/usage/knowledge"
                        },
                        {
                          "title": "Agent with Memory",
                          "href": "/docs/models/providers/native/meta/usage/memory"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mistral",
                  "href": "/docs/models/providers/native/mistral/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/mistral/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/mistral/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/mistral/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/native/mistral/usage/basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/native/mistral/usage/async-basic"
                        },
                        {
                          "title": "Async Basic Streaming Agent",
                          "href": "/docs/models/providers/native/mistral/usage/async-basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/mistral/usage/tool-use"
                        },
                        {
                          "title": "Async Agent with Tools",
                          "href": "/docs/models/providers/native/mistral/usage/async-tool-use"
                        },
                        {
                          "title": "Agent with Memory",
                          "href": "/docs/models/providers/native/mistral/usage/memory"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/native/mistral/usage/structured-output"
                        },
                        {
                          "title": "Structured Output With Tool Use",
                          "href": "/docs/models/providers/native/mistral/usage/structured-output-with-tool-use"
                        },
                        {
                          "title": "Async Structured Output Agent",
                          "href": "/docs/models/providers/native/mistral/usage/async-structured-output"
                        },
                        {
                          "title": "Image Bytes Input Agent",
                          "href": "/docs/models/providers/native/mistral/usage/image-bytes-input-agent"
                        },
                        {
                          "title": "Image Compare Agent",
                          "href": "/docs/models/providers/native/mistral/usage/image-compare-agent"
                        },
                        {
                          "title": "Image File Input Agent",
                          "href": "/docs/models/providers/native/mistral/usage/image-file-input-agent"
                        },
                        {
                          "title": "Image Ocr With Structured Output",
                          "href": "/docs/models/providers/native/mistral/usage/image-ocr-with-structured-output"
                        },
                        {
                          "title": "Image Transcribe Document Agent",
                          "href": "/docs/models/providers/native/mistral/usage/image-transcribe-document-agent"
                        },
                        {
                          "title": "Mistral Small",
                          "href": "/docs/models/providers/native/mistral/usage/mistral-small"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "OpenAI",
                  "href": "/docs/models/providers/native/openai/completion/overview",
                  "items": [
                    {
                      "title": "OpenAI Chat Completion",
                      "href": "/docs/models/providers/native/openai/completion/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/openai/completion/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/openai/completion/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/native/openai/completion/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/native/openai/completion/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/native/openai/completion/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/native/openai/completion/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/native/openai/completion/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/native/openai/completion/usage/knowledge"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/openai/completion/usage/image-agent"
                            },
                            {
                              "title": "Audio Input Agent",
                              "href": "/docs/models/providers/native/openai/completion/usage/audio-input-agent"
                            },
                            {
                              "title": "Audio Output Agent",
                              "href": "/docs/models/providers/native/openai/completion/usage/audio-output-agent"
                            },
                            {
                              "title": "Generate Images",
                              "href": "/docs/models/providers/native/openai/completion/usage/generate-images"
                            },
                            {
                              "title": "Agent with Reasoning Effort",
                              "href": "/docs/models/providers/native/openai/completion/usage/reasoning-effort"
                            },
                            {
                              "title": "Response Caching",
                              "href": "/docs/models/providers/native/openai/completion/usage/cache-response"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "OpenAI Responses",
                      "href": "/docs/models/providers/native/openai/responses/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/native/openai/responses/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/native/openai/responses/usage/agent-flex-tier",
                          "items": [
                            {
                              "title": "Agent Flex Tier",
                              "href": "/docs/models/providers/native/openai/responses/usage/agent-flex-tier"
                            },
                            {
                              "title": "Async Basic",
                              "href": "/docs/models/providers/native/openai/responses/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Stream",
                              "href": "/docs/models/providers/native/openai/responses/usage/async-basic-stream"
                            },
                            {
                              "title": "Async Tool Use",
                              "href": "/docs/models/providers/native/openai/responses/usage/async-tool-use"
                            },
                            {
                              "title": "Basic",
                              "href": "/docs/models/providers/native/openai/responses/usage/basic"
                            },
                            {
                              "title": "Basic Stream",
                              "href": "/docs/models/providers/native/openai/responses/usage/basic-stream"
                            },
                            {
                              "title": "Db",
                              "href": "/docs/models/providers/native/openai/responses/usage/db"
                            },
                            {
                              "title": "Deep Research Agent",
                              "href": "/docs/models/providers/native/openai/responses/usage/deep-research-agent"
                            },
                            {
                              "title": "Image Agent",
                              "href": "/docs/models/providers/native/openai/responses/usage/image-agent"
                            },
                            {
                              "title": "Image Agent Bytes",
                              "href": "/docs/models/providers/native/openai/responses/usage/image-agent-bytes"
                            },
                            {
                              "title": "Image Agent With Memory",
                              "href": "/docs/models/providers/native/openai/responses/usage/image-agent-with-memory"
                            },
                            {
                              "title": "Image Generation Agent",
                              "href": "/docs/models/providers/native/openai/responses/usage/image-generation-agent"
                            },
                            {
                              "title": "Knowledge",
                              "href": "/docs/models/providers/native/openai/responses/usage/knowledge"
                            },
                            {
                              "title": "Memory",
                              "href": "/docs/models/providers/native/openai/responses/usage/memory"
                            },
                            {
                              "title": "Pdf Input Local",
                              "href": "/docs/models/providers/native/openai/responses/usage/pdf-input-local"
                            },
                            {
                              "title": "Pdf Input Url",
                              "href": "/docs/models/providers/native/openai/responses/usage/pdf-input-url"
                            },
                            {
                              "title": "Reasoning O3 Mini",
                              "href": "/docs/models/providers/native/openai/responses/usage/reasoning-o3-mini"
                            },
                            {
                              "title": "Structured Output",
                              "href": "/docs/models/providers/native/openai/responses/usage/structured-output"
                            },
                            {
                              "title": "Tool Use",
                              "href": "/docs/models/providers/native/openai/responses/usage/tool-use"
                            },
                            {
                              "title": "Tool Use Gpt 5",
                              "href": "/docs/models/providers/native/openai/responses/usage/tool-use-gpt-5"
                            },
                            {
                              "title": "Tool Use O3",
                              "href": "/docs/models/providers/native/openai/responses/usage/tool-use-o3"
                            },
                            {
                              "title": "Tool Use Stream",
                              "href": "/docs/models/providers/native/openai/responses/usage/tool-use-stream"
                            },
                            {
                              "title": "Verbosity Control",
                              "href": "/docs/models/providers/native/openai/responses/usage/verbosity-control"
                            },
                            {
                              "title": "Websearch Builtin Tool",
                              "href": "/docs/models/providers/native/openai/responses/usage/websearch-builtin-tool"
                            },
                            {
                              "title": "ZDR Reasoning Agent",
                              "href": "/docs/models/providers/native/openai/responses/usage/zdr-reasoning-agent"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Perplexity",
                  "href": "/docs/models/providers/native/perplexity/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/perplexity/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/perplexity/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/perplexity/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/native/perplexity/usage/basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/native/perplexity/usage/async-basic"
                        },
                        {
                          "title": "Async Basic Streaming Agent",
                          "href": "/docs/models/providers/native/perplexity/usage/async-basic-stream"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/native/perplexity/usage/knowledge"
                        },
                        {
                          "title": "Agent with Memory",
                          "href": "/docs/models/providers/native/perplexity/usage/memory"
                        },
                        {
                          "title": "Agent with Structured Output",
                          "href": "/docs/models/providers/native/perplexity/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Vercel",
                  "href": "/docs/models/providers/native/vercel/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/vercel/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/vercel/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/native/vercel/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/native/vercel/usage/basic-stream"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/native/vercel/usage/image-agent"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/native/vercel/usage/knowledge"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/native/vercel/usage/tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "XAI",
                  "href": "/docs/models/providers/native/xai/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/native/xai/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/native/xai/usage/basic",
                      "items": [
                        {
                          "title": "Basic",
                          "href": "/docs/models/providers/native/xai/usage/basic"
                        },
                        {
                          "title": "Basic Stream",
                          "href": "/docs/models/providers/native/xai/usage/basic-stream"
                        },
                        {
                          "title": "Tool Use",
                          "href": "/docs/models/providers/native/xai/usage/tool-use"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/native/xai/usage/basic-async"
                        },
                        {
                          "title": "Async Streaming Agent",
                          "href": "/docs/models/providers/native/xai/usage/basic-async-stream"
                        },
                        {
                          "title": "Tool Use Stream",
                          "href": "/docs/models/providers/native/xai/usage/tool-use-stream"
                        },
                        {
                          "title": "Async Tool Use",
                          "href": "/docs/models/providers/native/xai/usage/async-tool-use"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/native/xai/usage/structured-output"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/native/xai/usage/image-agent"
                        },
                        {
                          "title": "Image Agent Bytes",
                          "href": "/docs/models/providers/native/xai/usage/image-agent-bytes"
                        },
                        {
                          "title": "Live Search Agent",
                          "href": "/docs/models/providers/native/xai/usage/live-search-agent"
                        },
                        {
                          "title": "Live Search Agent Stream",
                          "href": "/docs/models/providers/native/xai/usage/live-search-agent-stream"
                        },
                        {
                          "title": "Reasoning Agent",
                          "href": "/docs/models/providers/native/xai/usage/reasoning-agent"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Local Model Providers",
              "href": "/docs/models/providers/local/ollama/overview",
              "items": [
                {
                  "title": "Ollama",
                  "href": "/docs/models/providers/local/ollama/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/local/ollama/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/local/ollama/usage/basic",
                      "items": [
                        {
                          "title": "Basic",
                          "href": "/docs/models/providers/local/ollama/usage/basic"
                        },
                        {
                          "title": "Basic Stream",
                          "href": "/docs/models/providers/local/ollama/usage/basic-stream"
                        },
                        {
                          "title": "Ollama Cloud",
                          "href": "/docs/models/providers/local/ollama/usage/cloud"
                        },
                        {
                          "title": "Async Basic",
                          "href": "/docs/models/providers/local/ollama/usage/async-basic"
                        },
                        {
                          "title": "Async Basic Stream",
                          "href": "/docs/models/providers/local/ollama/usage/async-basic-stream"
                        },
                        {
                          "title": "Tool Use",
                          "href": "/docs/models/providers/local/ollama/usage/tool-use"
                        },
                        {
                          "title": "Tool Use Stream",
                          "href": "/docs/models/providers/local/ollama/usage/tool-use-stream"
                        },
                        {
                          "title": "Knowledge",
                          "href": "/docs/models/providers/local/ollama/usage/knowledge"
                        },
                        {
                          "title": "Memory",
                          "href": "/docs/models/providers/local/ollama/usage/memory"
                        },
                        {
                          "title": "Demo Deepseek R1",
                          "href": "/docs/models/providers/local/ollama/usage/demo-deepseek-r1"
                        },
                        {
                          "title": "Demo Gemma",
                          "href": "/docs/models/providers/local/ollama/usage/demo-gemma"
                        },
                        {
                          "title": "Demo Phi4",
                          "href": "/docs/models/providers/local/ollama/usage/demo-phi4"
                        },
                        {
                          "title": "Demo Qwen",
                          "href": "/docs/models/providers/local/ollama/usage/demo-qwen"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/local/ollama/usage/image-agent"
                        },
                        {
                          "title": "Multimodal Agent",
                          "href": "/docs/models/providers/local/ollama/usage/multimodal"
                        },
                        {
                          "title": "Set Client",
                          "href": "/docs/models/providers/local/ollama/usage/set-client"
                        },
                        {
                          "title": "Set Temperature",
                          "href": "/docs/models/providers/local/ollama/usage/set-temperature"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/local/ollama/usage/storage"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/local/ollama/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LlamaCpp",
                  "href": "/docs/models/providers/local/llama-cpp/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/local/llama-cpp/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/local/llama-cpp/usage/basic",
                      "items": [
                        {
                          "title": "Basic",
                          "href": "/docs/models/providers/local/llama-cpp/usage/basic"
                        },
                        {
                          "title": "Basic Stream",
                          "href": "/docs/models/providers/local/llama-cpp/usage/basic-stream"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/local/llama-cpp/usage/structured-output"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/local/llama-cpp/usage/tool-use"
                        },
                        {
                          "title": "Agent with Tools Stream",
                          "href": "/docs/models/providers/local/llama-cpp/usage/tool-use-stream"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LM Studio",
                  "href": "/docs/models/providers/local/lmstudio/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/local/lmstudio/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/local/lmstudio/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/local/lmstudio/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/local/lmstudio/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/local/lmstudio/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/local/lmstudio/usage/structured-output"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/local/lmstudio/usage/storage"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/local/lmstudio/usage/knowledge"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/local/lmstudio/usage/image-agent"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "VLLM",
                  "href": "/docs/models/providers/local/vllm/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/local/vllm/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/local/vllm/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/local/vllm/usage/basic"
                        },
                        {
                          "title": "Agent with Streaming",
                          "href": "/docs/models/providers/local/vllm/usage/basic-stream"
                        },
                        {
                          "title": "Async Agent",
                          "href": "/docs/models/providers/local/vllm/usage/async-basic"
                        },
                        {
                          "title": "Async Agent with Streaming",
                          "href": "/docs/models/providers/local/vllm/usage/async-basic-stream"
                        },
                        {
                          "title": "Code Generation",
                          "href": "/docs/models/providers/local/vllm/usage/code-generation"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/local/vllm/usage/storage"
                        },
                        {
                          "title": "Agent with Memory",
                          "href": "/docs/models/providers/local/vllm/usage/memory"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/local/vllm/usage/structured-output"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/local/vllm/usage/tool-use"
                        },
                        {
                          "title": "Async Agent with Tools",
                          "href": "/docs/models/providers/local/vllm/usage/async-tool-use"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Cloud Model Providers",
              "href": "/docs/models/providers/cloud/aws-bedrock/overview",
              "items": [
                {
                  "title": "AWS",
                  "href": "/docs/models/providers/cloud/aws-bedrock/overview",
                  "items": [
                    {
                      "title": "AWS Bedrock",
                      "href": "/docs/models/providers/cloud/aws-bedrock/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/cloud/aws-bedrock/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/knowledge"
                            },
                            {
                              "title": "Agent with Image Input",
                              "href": "/docs/models/providers/cloud/aws-bedrock/usage/image-agent"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "AWS Claude",
                      "href": "/docs/models/providers/cloud/aws-claude/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/cloud/aws-claude/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/aws-claude/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/cloud/aws-claude/usage/knowledge"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Azure",
                  "href": "/docs/models/providers/cloud/azure-ai-foundry/overview",
                  "items": [
                    {
                      "title": "Azure AI Foundry",
                      "href": "/docs/models/providers/cloud/azure-ai-foundry/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/cloud/azure-ai-foundry/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic"
                            },
                            {
                              "title": "Basic Streaming",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Knowledge Base",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/knowledge"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/storage"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/azure-ai-foundry/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Azure OpenAI",
                      "href": "/docs/models/providers/cloud/azure-openai/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/cloud/azure-openai/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/cloud/azure-openai/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/basic"
                            },
                            {
                              "title": "Basic Streaming",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Knowledge Base",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/knowledge"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/storage"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/structured-output"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/cloud/azure-openai/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "IBM WatsonX",
                  "href": "/docs/models/providers/cloud/ibm-watsonx/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/cloud/ibm-watsonx/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic"
                        },
                        {
                          "title": "Streaming Basic Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/basic-stream"
                        },
                        {
                          "title": "Async Streaming Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-basic"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/tool-use"
                        },
                        {
                          "title": "Agent with Async Tool Usage",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/async-tool-use"
                        },
                        {
                          "title": "Agent with Structured Output",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/structured-output"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/storage"
                        },
                        {
                          "title": "RAG Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/knowledge"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/cloud/ibm-watsonx/usage/image-agent-bytes"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Vertex AI",
                  "href": "/docs/models/providers/cloud/vertexai-claude/overview",
                  "items": [
                    {
                      "title": "Claude",
                      "href": "/docs/models/providers/cloud/vertexai-claude/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/structured-output"
                        },
                        {
                          "title": "PDF Input Local Agent",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-local"
                        },
                        {
                          "title": "PDF Input URL Agent",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-url"
                        },
                        {
                          "title": "PDF Input Bytes Agent",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/pdf-input-bytes"
                        },
                        {
                          "title": "Image Input Bytes Content",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/image-input-bytes"
                        },
                        {
                          "title": "Image Input URL",
                          "href": "/docs/models/providers/cloud/vertexai-claude/usage/image-input-url"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Model Gateways & Aggregators",
              "href": "/docs/models/providers/gateways/aimlapi/overview",
              "items": [
                {
                  "title": "AIML API",
                  "href": "/docs/models/providers/gateways/aimlapi/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/aimlapi/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs",
                      "items": []
                    }
                  ]
                },
                {
                  "title": "Cerebras",
                  "href": "/docs/models/providers/gateways/cerebras/overview",
                  "items": [
                    {
                      "title": "Cerebras",
                      "href": "/docs/models/providers/gateways/cerebras/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/cerebras/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/cerebras/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/cerebras/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/cerebras/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/cerebras/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/cerebras/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/cerebras/usage/storage"
                            },
                            {
                              "title": "Agent with Knowledge Base",
                              "href": "/docs/models/providers/gateways/cerebras/usage/knowledge"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "Cerebras OpenAI",
                      "href": "/docs/models/providers/gateways/cerebras-openai/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/cerebras-openai/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/tool-use"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/storage"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/cerebras-openai/usage/knowledge"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "CometAPI",
                  "href": "/docs/models/providers/gateways/cometapi/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/cometapi/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs",
                      "items": []
                    }
                  ]
                },
                {
                  "title": "DeepInfra",
                  "href": "/docs/models/providers/gateways/deepinfra/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/deepinfra/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/deepinfra/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/deepinfra/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/deepinfra/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/deepinfra/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/gateways/deepinfra/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Fireworks",
                  "href": "/docs/models/providers/gateways/fireworks/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/fireworks/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/fireworks/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/fireworks/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/fireworks/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/fireworks/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/gateways/fireworks/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Groq",
                  "href": "/docs/models/providers/gateways/groq/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/groq/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/groq/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/groq/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/gateways/groq/usage/structured-output"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/gateways/groq/usage/storage"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/gateways/groq/usage/knowledge"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/image-agent"
                        },
                        {
                          "title": "Deep Knowledge Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/deep-knowledge"
                        },
                        {
                          "title": "Browser Search Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/browser-search"
                        },
                        {
                          "title": "Agent with Metrics",
                          "href": "/docs/models/providers/gateways/groq/usage/metrics"
                        },
                        {
                          "title": "Reasoning Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/reasoning-agent"
                        },
                        {
                          "title": "Transcription Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/transcription-agent"
                        },
                        {
                          "title": "Translation Agent",
                          "href": "/docs/models/providers/gateways/groq/usage/translation-agent"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Hugging Face",
                  "href": "/docs/models/providers/gateways/huggingface/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/huggingface/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/huggingface/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/huggingface/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/huggingface/usage/basic-stream"
                        },
                        {
                          "title": "Async Basic.Py",
                          "href": "/docs/models/providers/gateways/huggingface/usage/async-basic"
                        },
                        {
                          "title": "Async Basic Stream.Py",
                          "href": "/docs/models/providers/gateways/huggingface/usage/async-basic-stream"
                        },
                        {
                          "title": "Llama Essay Writer",
                          "href": "/docs/models/providers/gateways/huggingface/usage/llama-essay-writer"
                        },
                        {
                          "title": "Tool Use",
                          "href": "/docs/models/providers/gateways/huggingface/usage/tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LangDB",
                  "href": "/docs/models/providers/gateways/langdb/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/langdb/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/langdb/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/langdb/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/gateways/langdb/usage/basic-stream"
                        },
                        {
                          "title": "Data Analyst Agent",
                          "href": "/docs/models/providers/gateways/langdb/usage/data-analyst"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/gateways/langdb/usage/structured-output"
                        },
                        {
                          "title": "Web Search Agent",
                          "href": "/docs/models/providers/gateways/langdb/usage/tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "LiteLLM",
                  "href": "/docs/models/providers/gateways/litellm/overview",
                  "items": [
                    {
                      "title": "LiteLLM",
                      "href": "/docs/models/providers/gateways/litellm/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/litellm/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/litellm/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/litellm/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/litellm/usage/basic-stream"
                            },
                            {
                              "title": "Async Basic Agent",
                              "href": "/docs/models/providers/gateways/litellm/usage/async-basic"
                            },
                            {
                              "title": "Async Basic Streaming Agent",
                              "href": "/docs/models/providers/gateways/litellm/usage/async-basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/litellm/usage/tool-use"
                            },
                            {
                              "title": "Async Tool Use",
                              "href": "/docs/models/providers/gateways/litellm/usage/async-tool-use"
                            },
                            {
                              "title": "Audio Input Agent",
                              "href": "/docs/models/providers/gateways/litellm/usage/audio-input-agent"
                            },
                            {
                              "title": "Agent with Knowledge",
                              "href": "/docs/models/providers/gateways/litellm/usage/knowledge"
                            },
                            {
                              "title": "Agent with Structured Outputs",
                              "href": "/docs/models/providers/gateways/litellm/usage/structured-output"
                            },
                            {
                              "title": "Agent with Storage",
                              "href": "/docs/models/providers/gateways/litellm/usage/storage"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "title": "LiteLLM OpenAI",
                      "href": "/docs/models/providers/gateways/litellm-openai/overview",
                      "items": [
                        {
                          "title": "Overview",
                          "href": "/docs/models/providers/gateways/litellm-openai/overview"
                        },
                        {
                          "title": "Usage",
                          "href": "/docs/models/providers/gateways/litellm-openai/usage/basic",
                          "items": [
                            {
                              "title": "Basic Agent",
                              "href": "/docs/models/providers/gateways/litellm-openai/usage/basic"
                            },
                            {
                              "title": "Streaming Agent",
                              "href": "/docs/models/providers/gateways/litellm-openai/usage/basic-stream"
                            },
                            {
                              "title": "Agent with Tools",
                              "href": "/docs/models/providers/gateways/litellm-openai/usage/tool-use"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Nebius",
                  "href": "/docs/models/providers/gateways/nebius/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/nebius/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/nebius/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/nebius/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/nebius/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/nebius/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/gateways/nebius/usage/structured-output"
                        },
                        {
                          "title": "Agent with Storage",
                          "href": "/docs/models/providers/gateways/nebius/usage/storage"
                        },
                        {
                          "title": "Agent with Knowledge",
                          "href": "/docs/models/providers/gateways/nebius/usage/knowledge"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Neosantara",
                  "href": "/docs/models/providers/gateways/neosantara/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/neosantara/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/neosantara/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/neosantara/usage/basic"
                        },
                        {
                          "title": "Basic Stream",
                          "href": "/docs/models/providers/gateways/neosantara/usage/basic-stream"
                        },
                        {
                          "title": "Tool Use",
                          "href": "/docs/models/providers/gateways/neosantara/usage/tool-use"
                        },
                        {
                          "title": "Structured Output",
                          "href": "/docs/models/providers/gateways/neosantara/usage/structured-output"
                        },
                        {
                          "title": "Async Basic",
                          "href": "/docs/models/providers/gateways/neosantara/usage/async-basic"
                        },
                        {
                          "title": "Async Basic Stream",
                          "href": "/docs/models/providers/gateways/neosantara/usage/async-basic-stream"
                        },
                        {
                          "title": "Async Tool Use",
                          "href": "/docs/models/providers/gateways/neosantara/usage/async-tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Nexus",
                  "href": "/docs/models/providers/gateways/nexus/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/nexus/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/nexus/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/nexus/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/gateways/nexus/usage/basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/gateways/nexus/usage/async-basic"
                        },
                        {
                          "title": "Async Streaming Agent",
                          "href": "/docs/models/providers/gateways/nexus/usage/async-basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/nexus/usage/tool-use"
                        },
                        {
                          "title": "Async Agent with Tools",
                          "href": "/docs/models/providers/gateways/nexus/usage/async-tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "NVIDIA",
                  "href": "/docs/models/providers/gateways/nvidia/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/nvidia/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/nvidia/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/nvidia/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/gateways/nvidia/usage/basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/gateways/nvidia/usage/async-basic"
                        },
                        {
                          "title": "Async Streaming Agent",
                          "href": "/docs/models/providers/gateways/nvidia/usage/async-basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/nvidia/usage/tool-use"
                        },
                        {
                          "title": "Async Agent with Tools",
                          "href": "/docs/models/providers/gateways/nvidia/usage/async-tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "OpenRouter",
                  "href": "/docs/models/providers/gateways/openrouter/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/openrouter/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs",
                      "items": []
                    }
                  ]
                },
                {
                  "title": "Portkey",
                  "href": "/docs/models/providers/gateways/portkey/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/portkey/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/portkey/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/portkey/usage/basic"
                        },
                        {
                          "title": "Basic Agent with Streaming",
                          "href": "/docs/models/providers/gateways/portkey/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/portkey/usage/tool-use"
                        },
                        {
                          "title": "Agent with Tools and Streaming",
                          "href": "/docs/models/providers/gateways/portkey/usage/tool-use-stream"
                        },
                        {
                          "title": "Structured Output Agent",
                          "href": "/docs/models/providers/gateways/portkey/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Requesty",
                  "href": "/docs/models/providers/gateways/requesty/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/requesty/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/requesty/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/requesty/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/requesty/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/requesty/usage/tool-use"
                        },
                        {
                          "title": "Agent with Structured Output",
                          "href": "/docs/models/providers/gateways/requesty/usage/structured-output"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Sambanova",
                  "href": "/docs/models/providers/gateways/sambanova/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/sambanova/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs",
                      "items": []
                    }
                  ]
                },
                {
                  "title": "SiliconFlow",
                  "href": "/docs/models/providers/gateways/siliconflow/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/siliconflow/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic-stream",
                      "items": [
                        {
                          "title": "Async Streaming Agent",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic-stream"
                        },
                        {
                          "title": "Async Basic Agent",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/async-basic"
                        },
                        {
                          "title": "Async Agent with Tools",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/async-tool-use"
                        },
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/basic"
                        },
                        {
                          "title": "Basic Streaming Agent",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/basic-stream"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/siliconflow/usage/tool-use"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Together",
                  "href": "/docs/models/providers/gateways/together/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/models/providers/gateways/together/overview"
                    },
                    {
                      "title": "Usage",
                      "href": "/docs/models/providers/gateways/together/usage/basic",
                      "items": [
                        {
                          "title": "Basic Agent",
                          "href": "/docs/models/providers/gateways/together/usage/basic"
                        },
                        {
                          "title": "Streaming Agent",
                          "href": "/docs/models/providers/gateways/together/usage/basic-stream"
                        },
                        {
                          "title": "Image Agent",
                          "href": "/docs/models/providers/gateways/together/usage/image-agent"
                        },
                        {
                          "title": "Image Input Bytes Content",
                          "href": "/docs/models/providers/gateways/together/usage/image-agent-bytes"
                        },
                        {
                          "title": "Image Agent with Memory",
                          "href": "/docs/models/providers/gateways/together/usage/image-agent-memory"
                        },
                        {
                          "title": "Agent with Structured Outputs",
                          "href": "/docs/models/providers/gateways/together/usage/structured-output"
                        },
                        {
                          "title": "Agent with Tools",
                          "href": "/docs/models/providers/gateways/together/usage/tool-use"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Use OpenAI-compatible models",
              "href": "/docs/models/providers/openai-like"
            }
          ]
        },
        {
          "title": "Supported Databases",
          "href": "/docs/database/providers/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/database/providers/overview"
            },
            {
              "title": "PostgreSQL",
              "href": "/docs/database/providers/postgres/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/postgres/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/postgres/usage/postgres-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/postgres/usage/postgres-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/postgres/usage/postgres-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/postgres/usage/postgres-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Async PostgreSQL",
              "href": "/docs/database/providers/async-postgres/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/async-postgres/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/async-postgres/usage/async-postgres-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "MySQL",
              "href": "/docs/database/providers/mysql/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/mysql/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/mysql/usage/mysql-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/mysql/usage/mysql-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/mysql/usage/mysql-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/mysql/usage/mysql-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Async MySQL",
              "href": "/docs/database/providers/async-mysql/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/async-mysql/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-agent",
                  "items": [
                    {
                      "title": "Agent with AsyncDb",
                      "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-agent"
                    },
                    {
                      "title": "Team with AsyncDb",
                      "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-team"
                    },
                    {
                      "title": "Workflow with AsyncDb",
                      "href": "/docs/database/providers/async-mysql/usage/async-mysql-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "SQLite",
              "href": "/docs/database/providers/sqlite/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/sqlite/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/sqlite/usage/sqlite-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/sqlite/usage/sqlite-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/sqlite/usage/sqlite-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/sqlite/usage/sqlite-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Async SQLite",
              "href": "/docs/database/providers/async-sqlite/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/async-sqlite/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/async-sqlite/usage/async-sqlite-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "In-Memory",
              "href": "/docs/database/providers/in-memory/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/in-memory/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/in-memory/usage/in-memory-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/in-memory/usage/in-memory-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/in-memory/usage/in-memory-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/in-memory/usage/in-memory-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "DynamoDB",
              "href": "/docs/database/providers/dynamodb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/dynamodb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/dynamodb/usage/dynamodb-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "MongoDB",
              "href": "/docs/database/providers/mongo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/mongo/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/mongo/usage/mongodb-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/mongo/usage/mongodb-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/mongo/usage/mongodb-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/mongo/usage/mongodb-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Async MongoDB",
              "href": "/docs/database/providers/async-mongo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/async-mongo/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/async-mongo/usage/async-mongodb-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "JSON",
              "href": "/docs/database/providers/json/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/json/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/json/usage/json-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/json/usage/json-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/json/usage/json-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/json/usage/json-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Singlestore",
              "href": "/docs/database/providers/singlestore/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/singlestore/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/singlestore/usage/singlestore-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/singlestore/usage/singlestore-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/singlestore/usage/singlestore-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/singlestore/usage/singlestore-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "SurrealDB",
              "href": "/docs/database/providers/surrealdb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/surrealdb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/surrealdb/usage/surrealdb-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Redis",
              "href": "/docs/database/providers/redis/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/redis/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/redis/usage/redis-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/redis/usage/redis-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/redis/usage/redis-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/redis/usage/redis-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "GCS",
              "href": "/docs/database/providers/gcs/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/gcs/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/gcs/usage/gcs-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/gcs/usage/gcs-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/gcs/usage/gcs-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/gcs/usage/gcs-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Firestore",
              "href": "/docs/database/providers/firestore/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/firestore/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/database/providers/firestore/usage/firestore-for-agent",
                  "items": [
                    {
                      "title": "Agent",
                      "href": "/docs/database/providers/firestore/usage/firestore-for-agent"
                    },
                    {
                      "title": "Team",
                      "href": "/docs/database/providers/firestore/usage/firestore-for-team"
                    },
                    {
                      "title": "Workflow",
                      "href": "/docs/database/providers/firestore/usage/firestore-for-workflow"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Supabase",
              "href": "/docs/database/providers/supabase/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/supabase/overview"
                }
              ]
            },
            {
              "title": "Neon",
              "href": "/docs/database/providers/neon/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/database/providers/neon/overview"
                }
              ]
            },
            {
              "title": "Custom Tables",
              "href": "/docs/database/providers/selecting-tables"
            }
          ]
        },
        {
          "title": "Vector Stores",
          "href": "/docs/knowledge/vector-stores/index",
          "items": [
            {
              "title": "Index",
              "href": "/docs/knowledge/vector-stores/index"
            },
            {
              "title": "PgVector",
              "href": "/docs/knowledge/vector-stores/pgvector/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/pgvector/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-db",
                  "items": [
                    {
                      "title": "PgVector",
                      "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-db"
                    },
                    {
                      "title": "PgVector Async",
                      "href": "/docs/knowledge/vector-stores/pgvector/usage/async-pgvector-db"
                    },
                    {
                      "title": "PgVector Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/pgvector/usage/pgvector-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "LanceDB",
              "href": "/docs/knowledge/vector-stores/lancedb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/lancedb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db",
                  "items": [
                    {
                      "title": "LanceDB",
                      "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db"
                    },
                    {
                      "title": "LanceDB Async",
                      "href": "/docs/knowledge/vector-stores/lancedb/usage/async-lance-db"
                    },
                    {
                      "title": "LanceDB Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/lancedb/usage/lance-db-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Pinecone",
              "href": "/docs/knowledge/vector-stores/pinecone/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/pinecone/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/pinecone/usage/pinecone-db",
                  "items": [
                    {
                      "title": "Pinecone",
                      "href": "/docs/knowledge/vector-stores/pinecone/usage/pinecone-db"
                    },
                    {
                      "title": "Pinecone Async",
                      "href": "/docs/knowledge/vector-stores/pinecone/usage/async-pinecone-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Qdrant",
              "href": "/docs/knowledge/vector-stores/qdrant/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/qdrant/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db",
                  "items": [
                    {
                      "title": "Qdrant",
                      "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db"
                    },
                    {
                      "title": "Qdrant Async",
                      "href": "/docs/knowledge/vector-stores/qdrant/usage/async-qdrant-db"
                    },
                    {
                      "title": "Qdrant Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/qdrant/usage/qdrant-db-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Chroma",
              "href": "/docs/knowledge/vector-stores/chroma/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/chroma/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-db",
                  "items": [
                    {
                      "title": "ChromaDB",
                      "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-db"
                    },
                    {
                      "title": "ChromaDB Async",
                      "href": "/docs/knowledge/vector-stores/chroma/usage/async-chroma-db"
                    },
                    {
                      "title": "Chroma Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/chroma/usage/chroma-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Milvus",
              "href": "/docs/knowledge/vector-stores/milvus/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/milvus/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db",
                  "items": [
                    {
                      "title": "Milvus",
                      "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db"
                    },
                    {
                      "title": "Milvus Async",
                      "href": "/docs/knowledge/vector-stores/milvus/usage/async-milvus-db"
                    },
                    {
                      "title": "Milvus Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/milvus/usage/milvus-db-hybrid-search"
                    },
                    {
                      "title": "Milvus Async Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/milvus/usage/async-milvus-db-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Weaviate",
              "href": "/docs/knowledge/vector-stores/weaviate/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/weaviate/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db",
                  "items": [
                    {
                      "title": "Weaviate",
                      "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db"
                    },
                    {
                      "title": "Weaviate Async",
                      "href": "/docs/knowledge/vector-stores/weaviate/usage/async-weaviate-db"
                    },
                    {
                      "title": "Weaviate Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/weaviate/usage/weaviate-db-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Couchbase",
              "href": "/docs/knowledge/vector-stores/couchbase/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/couchbase/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/couchbase/usage/couchbase-db",
                  "items": [
                    {
                      "title": "Couchbase",
                      "href": "/docs/knowledge/vector-stores/couchbase/usage/couchbase-db"
                    },
                    {
                      "title": "Couchbase Async",
                      "href": "/docs/knowledge/vector-stores/couchbase/usage/async-couchbase-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Cassandra",
              "href": "/docs/knowledge/vector-stores/cassandra/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/cassandra/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/cassandra/usage/cassandra-db",
                  "items": [
                    {
                      "title": "Cassandra",
                      "href": "/docs/knowledge/vector-stores/cassandra/usage/cassandra-db"
                    },
                    {
                      "title": "Cassandra Async",
                      "href": "/docs/knowledge/vector-stores/cassandra/usage/async-cassandra-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Clickhouse",
              "href": "/docs/knowledge/vector-stores/clickhouse/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/clickhouse/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/clickhouse/usage/clickhouse-db",
                  "items": [
                    {
                      "title": "ClickHouse",
                      "href": "/docs/knowledge/vector-stores/clickhouse/usage/clickhouse-db"
                    },
                    {
                      "title": "ClickHouse Async",
                      "href": "/docs/knowledge/vector-stores/clickhouse/usage/async-clickhouse-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Singlestore",
              "href": "/docs/knowledge/vector-stores/singlestore/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/singlestore/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/singlestore/usage/singlestore-db",
                  "items": [
                    {
                      "title": "SingleStore",
                      "href": "/docs/knowledge/vector-stores/singlestore/usage/singlestore-db"
                    },
                    {
                      "title": "SingleStore Async",
                      "href": "/docs/knowledge/vector-stores/singlestore/usage/async-singlestore-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Redis",
              "href": "/docs/knowledge/vector-stores/redis/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/redis/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/redis/usage/redis-db",
                  "items": [
                    {
                      "title": "Redis",
                      "href": "/docs/knowledge/vector-stores/redis/usage/redis-db"
                    },
                    {
                      "title": "Redis Async",
                      "href": "/docs/knowledge/vector-stores/redis/usage/async-redis-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "MongoDB",
              "href": "/docs/knowledge/vector-stores/mongodb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/mongodb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db",
                  "items": [
                    {
                      "title": "MongoDB",
                      "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db"
                    },
                    {
                      "title": "MongoDB Async",
                      "href": "/docs/knowledge/vector-stores/mongodb/usage/async-mongo-db"
                    },
                    {
                      "title": "MongoDB Hybrid Search",
                      "href": "/docs/knowledge/vector-stores/mongodb/usage/mongo-db-hybrid-search"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Azure Cosmos DB MongoDB vCore",
              "href": "/docs/knowledge/vector-stores/azure_cosmos_mongodb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/azure_cosmos_mongodb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs",
                  "items": []
                }
              ]
            },
            {
              "title": "SurrealDB",
              "href": "/docs/knowledge/vector-stores/surrealdb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/surrealdb/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/surrealdb/usage/surreal-db",
                  "items": [
                    {
                      "title": "SurrealDB",
                      "href": "/docs/knowledge/vector-stores/surrealdb/usage/surreal-db"
                    },
                    {
                      "title": "SurrealDB Async",
                      "href": "/docs/knowledge/vector-stores/surrealdb/usage/async-surreal-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "LightRAG",
              "href": "/docs/knowledge/vector-stores/lightrag/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/lightrag/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/lightrag/usage/lightrag-db",
                  "items": [
                    {
                      "title": "LightRAG",
                      "href": "/docs/knowledge/vector-stores/lightrag/usage/lightrag-db"
                    },
                    {
                      "title": "LightRAG Async",
                      "href": "/docs/knowledge/vector-stores/lightrag/usage/async-lightrag-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Upstash",
              "href": "/docs/knowledge/vector-stores/upstash/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/upstash/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/upstash/usage/upstash-db",
                  "items": [
                    {
                      "title": "Upstash",
                      "href": "/docs/knowledge/vector-stores/upstash/usage/upstash-db"
                    },
                    {
                      "title": "Upstash Async",
                      "href": "/docs/knowledge/vector-stores/upstash/usage/async-upstash-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "LangChain",
              "href": "/docs/knowledge/vector-stores/langchain/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/langchain/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/langchain/usage/langchain-db",
                  "items": [
                    {
                      "title": "LangChain",
                      "href": "/docs/knowledge/vector-stores/langchain/usage/langchain-db"
                    },
                    {
                      "title": "LangChain Async",
                      "href": "/docs/knowledge/vector-stores/langchain/usage/async-langchain-db"
                    }
                  ]
                }
              ]
            },
            {
              "title": "LlamaIndex",
              "href": "/docs/knowledge/vector-stores/llamaindex/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/knowledge/vector-stores/llamaindex/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/knowledge/vector-stores/llamaindex/usage/llamaindex-db",
                  "items": [
                    {
                      "title": "LlamaIndex",
                      "href": "/docs/knowledge/vector-stores/llamaindex/usage/llamaindex-db"
                    },
                    {
                      "title": "LlamaIndex Async",
                      "href": "/docs/knowledge/vector-stores/llamaindex/usage/async-llamaindex-db"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Embedders",
          "href": "/docs/knowledge/concepts/embedder/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/knowledge/concepts/embedder/overview"
            },
            {
              "title": "OpenAI Embedder",
              "href": "/docs/knowledge/concepts/embedder/openai/openai-embedder"
            },
            {
              "title": "Cohere Embedder",
              "href": "/docs/knowledge/concepts/embedder/cohere/cohere-embedder"
            },
            {
              "title": "Gemini Embedder",
              "href": "/docs/knowledge/concepts/embedder/gemini/gemini-embedder"
            },
            {
              "title": "Ollama Embedder",
              "href": "/docs/knowledge/concepts/embedder/ollama/ollama-embedder"
            },
            {
              "title": "Mistral Embedder",
              "href": "/docs/knowledge/concepts/embedder/mistral/mistral-embedder"
            },
            {
              "title": "VoyageAI Embedder",
              "href": "/docs/knowledge/concepts/embedder/voyageai/voyageai-embedder"
            }
          ]
        }
      ]
    },
    {
      "group": "Other",
      "items": [
        {
          "title": "Culture",
          "href": "/docs/culture/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/culture/overview"
            }
          ]
        },
        {
          "title": "Custom Logging",
          "href": "/docs/custom-logging"
        }
      ]
    },
    {
      "group": "Additional Resources",
      "items": [
        {
          "title": "Getting Help",
          "href": "/docs/get-help"
        },
        {
          "title": "Install & Setup",
          "href": "/docs/other/install"
        },
        {
          "title": "Observability",
          "href": "/docs/observability/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/observability/overview"
            },
            {
              "title": "AgentOps",
              "href": "/docs/observability/agentops"
            },
            {
              "title": "Arize",
              "href": "/docs/observability/arize"
            },
            {
              "title": "Atla",
              "href": "/docs/observability/atla"
            },
            {
              "title": "LangDB",
              "href": "/docs/observability/langdb"
            },
            {
              "title": "Langfuse",
              "href": "/docs/observability/langfuse"
            },
            {
              "title": "LangSmith",
              "href": "/docs/observability/langsmith"
            },
            {
              "title": "Langtrace",
              "href": "/docs/observability/langtrace"
            },
            {
              "title": "LangWatch",
              "href": "/docs/observability/langwatch"
            },
            {
              "title": "Maxim",
              "href": "/docs/observability/maxim"
            },
            {
              "title": "MLflow",
              "href": "/docs/observability/mlflow"
            },
            {
              "title": "OpenLIT",
              "href": "/docs/observability/openlit"
            },
            {
              "title": "Traceloop",
              "href": "/docs/observability/traceloop"
            },
            {
              "title": "Weave",
              "href": "/docs/observability/weave"
            }
          ]
        },
        {
          "title": "Integrations",
          "href": "/docs/integrations/memory/memori",
          "items": [
            {
              "title": "Memory",
              "href": "/docs/integrations/memory/memori",
              "items": [
                {
                  "title": "Memori",
                  "href": "/docs/integrations/memory/memori"
                }
              ]
            },
            {
              "title": "Discord Bot",
              "href": "/docs/integrations/discord/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/integrations/discord/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/integrations/discord/usage/basic",
                  "items": [
                    {
                      "title": "Basic",
                      "href": "/docs/integrations/discord/usage/basic"
                    },
                    {
                      "title": "Agent with Media",
                      "href": "/docs/integrations/discord/usage/agent-with-media"
                    },
                    {
                      "title": "Agent with User Memory",
                      "href": "/docs/integrations/discord/usage/agent-with-user-memory"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Scenario Testing",
              "href": "/docs/integrations/testing/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/integrations/testing/overview"
                },
                {
                  "title": "Usage",
                  "href": "/docs/integrations/testing/usage/basic",
                  "items": [
                    {
                      "title": "Scenario Testing",
                      "href": "/docs/integrations/testing/usage/basic"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Governance",
              "href": "/docs/integrations/governance/agentsystems-notary",
              "items": [
                {
                  "title": "AgentSystems Notary",
                  "href": "/docs/integrations/governance/agentsystems-notary"
                }
              ]
            }
          ]
        },
        {
          "title": "Migrations",
          "href": "/docs/other/v2-migration",
          "items": [
            {
              "title": "Kern v2 Migration",
              "href": "/docs/other/v2-migration",
              "items": [
                {
                  "title": "Kern v2.0 Migration Guide",
                  "href": "/docs/other/v2-migration"
                },
                {
                  "title": "Kern v2.0 Changelog",
                  "href": "/docs/other/v2-changelog"
                }
              ]
            },
            {
              "title": "Database Migrations",
              "href": "/docs/other/database-migrations"
            },
            {
              "title": "Workflows 2.0 Migration",
              "href": "/docs/other/workflows-migration"
            }
          ]
        },
        {
          "title": "Cursor Rules",
          "href": "/docs/other/cursor-rules"
        },
        {
          "title": "Contributing to Kern",
          "href": "/docs/other/contribute"
        },
        {
          "title": "AgentUI",
          "href": "/docs/other/agent-ui"
        },
        {
          "title": "Telemetry",
          "href": "/docs/telemetry"
        }
      ]
    }
  ],
  "AgentOS": [
    {
      "group": "Get Started",
      "items": [
        {
          "title": "Introduction",
          "href": "/docs/agent-os/introduction"
        },
        {
          "title": "Run Your AgentOS",
          "href": "/docs/agent-os/run-your-os"
        },
        {
          "title": "Connect Your AgentOS",
          "href": "/docs/agent-os/connect-your-os"
        },
        {
          "title": "AgentOS Control Plane",
          "href": "/docs/agent-os/control-plane"
        },
        {
          "title": "Security & Authorization",
          "href": "/docs/agent-os/security/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/security/overview"
            },
            {
              "title": "RBAC",
              "href": "/docs/agent-os/security/rbac"
            }
          ]
        }
      ]
    },
    {
      "group": "AgentOS",
      "items": [
        {
          "title": "Overview",
          "href": "/docs/agent-os/overview"
        },
        {
          "title": "Using the API",
          "href": "/docs/agent-os/using-the-api"
        },
        {
          "title": "BYO FastAPI App",
          "href": "/docs/agent-os/custom-fastapi/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/custom-fastapi/overview"
            },
            {
              "title": "Override Routes",
              "href": "/docs/agent-os/custom-fastapi/override-routes"
            }
          ]
        },
        {
          "title": "MCP",
          "href": "/docs/agent-os/mcp/mcp",
          "items": [
            {
              "title": "AgentOS as MCP Server",
              "href": "/docs/agent-os/mcp/mcp"
            },
            {
              "title": "MCPTools within AgentOS",
              "href": "/docs/agent-os/mcp/tools"
            }
          ]
        },
        {
          "title": "Middleware",
          "href": "/docs/agent-os/middleware/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/middleware/overview"
            },
            {
              "title": "Custom",
              "href": "/docs/agent-os/middleware/custom"
            },
            {
              "title": "JWT",
              "href": "/docs/agent-os/middleware/jwt"
            }
          ]
        },
        {
          "title": "Dynamic Agents",
          "href": "/docs/agent-os/factories/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/factories/overview"
            },
            {
              "title": "AgentFactory",
              "href": "/docs/agent-os/factories/agent-factory"
            },
            {
              "title": "TeamFactory",
              "href": "/docs/agent-os/factories/team-factory"
            },
            {
              "title": "WorkflowFactory",
              "href": "/docs/agent-os/factories/workflow-factory"
            }
          ]
        },
        {
          "title": "Knowledge",
          "href": "/docs/agent-os/knowledge/manage-knowledge",
          "items": [
            {
              "title": "Manage Knowledge",
              "href": "/docs/agent-os/knowledge/manage-knowledge"
            },
            {
              "title": "Filter Knowledge",
              "href": "/docs/agent-os/knowledge/filter-knowledge"
            }
          ]
        },
        {
          "title": "Studio",
          "href": "/docs/agent-os/studio/introduction",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/studio/introduction"
            },
            {
              "title": "Agents",
              "href": "/docs/agent-os/studio/agents"
            },
            {
              "title": "Teams",
              "href": "/docs/agent-os/studio/teams"
            },
            {
              "title": "Workflows",
              "href": "/docs/agent-os/studio/workflows",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/agent-os/studio/workflows"
                },
                {
                  "title": "CEL Expressions",
                  "href": "/docs/agent-os/studio/cel-expressions"
                }
              ]
            },
            {
              "title": "Registry",
              "href": "/docs/agent-os/studio/registry"
            }
          ]
        },
        {
          "title": "Multi-Framework",
          "href": "/docs/agent-os/multi-framework/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/multi-framework/overview"
            },
            {
              "title": "Antigravity",
              "href": "/docs/agent-os/multi-framework/antigravity"
            },
            {
              "title": "Claude Agent SDK",
              "href": "/docs/agent-os/multi-framework/claude-agent-sdk"
            },
            {
              "title": "LangGraph",
              "href": "/docs/agent-os/multi-framework/langgraph"
            },
            {
              "title": "DSPy",
              "href": "/docs/agent-os/multi-framework/dspy"
            }
          ]
        },
        {
          "title": "Configuration",
          "href": "/docs/agent-os/config"
        },
        {
          "title": "Background Hooks",
          "href": "/docs/agent-os/background-tasks/overview"
        },
        {
          "title": "Scheduler",
          "href": "/docs/agent-os/scheduler/overview"
        },
        {
          "title": "Approvals",
          "href": "/docs/agent-os/approvals/overview"
        },
        {
          "title": "Custom Lifespan",
          "href": "/docs/agent-os/lifespan"
        },
        {
          "title": "Clients",
          "href": "/docs/agent-os/client/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/client/overview"
            },
            {
              "title": "AgentOS Client",
              "href": "/docs/agent-os/client/agentos-client"
            },
            {
              "title": "A2A Client",
              "href": "/docs/agent-os/client/a2a-client"
            }
          ]
        },
        {
          "title": "Remote Execution",
          "href": "/docs/agent-os/remote-execution/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/remote-execution/overview"
            },
            {
              "title": "Remote Agent",
              "href": "/docs/agent-os/remote-execution/remote-agent"
            },
            {
              "title": "Remote Team",
              "href": "/docs/agent-os/remote-execution/remote-team"
            },
            {
              "title": "Remote Workflow",
              "href": "/docs/agent-os/remote-execution/remote-workflow"
            },
            {
              "title": "Gateway Pattern",
              "href": "/docs/agent-os/remote-execution/gateway"
            }
          ]
        },
        {
          "title": "Interfaces",
          "href": "/docs/agent-os/interfaces/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/interfaces/overview"
            },
            {
              "title": "WhatsApp",
              "href": "/docs/agent-os/interfaces/whatsapp/introduction",
              "items": [
                {
                  "title": "WhatsApp",
                  "href": "/docs/agent-os/interfaces/whatsapp/introduction"
                },
                {
                  "title": "Reference",
                  "href": "/docs/agent-os/interfaces/whatsapp/reference"
                }
              ]
            },
            {
              "title": "A2A",
              "href": "/docs/agent-os/interfaces/a2a/introduction"
            },
            {
              "title": "AG-UI",
              "href": "/docs/agent-os/interfaces/ag-ui/introduction"
            },
            {
              "title": "Slack",
              "href": "/docs/agent-os/interfaces/slack/introduction",
              "items": [
                {
                  "title": "Slack",
                  "href": "/docs/agent-os/interfaces/slack/introduction"
                },
                {
                  "title": "Human-in-the-Loop",
                  "href": "/docs/agent-os/interfaces/slack/hitl"
                },
                {
                  "title": "Reference",
                  "href": "/docs/agent-os/interfaces/slack/reference"
                }
              ]
            },
            {
              "title": "Telegram",
              "href": "/docs/agent-os/interfaces/telegram/introduction",
              "items": [
                {
                  "title": "Telegram",
                  "href": "/docs/agent-os/interfaces/telegram/introduction"
                },
                {
                  "title": "Reference",
                  "href": "/docs/agent-os/interfaces/telegram/reference"
                }
              ]
            }
          ]
        },
        {
          "title": "Tracing",
          "href": "/docs/agent-os/tracing/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/agent-os/tracing/overview"
            },
            {
              "title": "Filter Options",
              "href": "/docs/agent-os/tracing/filter-options"
            },
            {
              "title": "Usage",
              "href": "/docs/agent-os/tracing/usage/basic-agent-tracing",
              "items": [
                {
                  "title": "Basic Agent Tracing",
                  "href": "/docs/agent-os/tracing/usage/basic-agent-tracing"
                },
                {
                  "title": "Basic Team Tracing",
                  "href": "/docs/agent-os/tracing/usage/basic-team-tracing"
                },
                {
                  "title": "Basic Workflow Tracing",
                  "href": "/docs/agent-os/tracing/usage/basic-workflow-tracing"
                },
                {
                  "title": "Agent with Knowledge Tracing",
                  "href": "/docs/agent-os/tracing/usage/agent-with-knowledge-tracing"
                },
                {
                  "title": "Agent with Reasoning Tools Tracing",
                  "href": "/docs/agent-os/tracing/usage/agent-with-reasoning-tools-tracing"
                },
                {
                  "title": "Multi-DB with setup_tracing()",
                  "href": "/docs/agent-os/tracing/usage/tracing-with-multi-db-scenario"
                },
                {
                  "title": "Multi-DB with tracing=True",
                  "href": "/docs/agent-os/tracing/usage/tracing-with-multi-db-scenario-and-tracing-flag"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Example Usage",
      "items": [
        {
          "title": "AgentOS Demo",
          "href": "/docs/agent-os/usage/demo"
        },
        {
          "title": "AgentOS Configuration",
          "href": "/docs/agent-os/usage/extra-configuration"
        },
        {
          "title": "Human-in-the-Loop Example",
          "href": "/docs/agent-os/usage/hitl"
        },
        {
          "title": "Database Migrations",
          "href": "/docs/agent-os/usage/database-migrations"
        },
        {
          "title": "MCP",
          "href": "/docs/agent-os/usage/mcp/enable-mcp-example",
          "items": [
            {
              "title": "Enable AgentOS MCP",
              "href": "/docs/agent-os/usage/mcp/enable-mcp-example"
            },
            {
              "title": "AgentOS with MCPTools",
              "href": "/docs/agent-os/usage/mcp/mcp-tools-example"
            }
          ]
        },
        {
          "title": "Middleware",
          "href": "/docs/agent-os/usage/middleware/custom-middleware",
          "items": [
            {
              "title": "Custom Middleware",
              "href": "/docs/agent-os/usage/middleware/custom-middleware"
            },
            {
              "title": "JWT Middleware with Authorization Headers",
              "href": "/docs/agent-os/usage/middleware/jwt-middleware"
            },
            {
              "title": "JWT Middleware with Cookies",
              "href": "/docs/agent-os/usage/middleware/jwt-cookies"
            },
            {
              "title": "Custom FastAPI App with JWT Middleware",
              "href": "/docs/agent-os/usage/middleware/custom-fastapi-jwt"
            }
          ]
        },
        {
          "title": "RBAC",
          "href": "/docs/agent-os/usage/rbac/basic",
          "items": [
            {
              "title": "Basic RBAC",
              "href": "/docs/agent-os/usage/rbac/basic"
            },
            {
              "title": "Advanced Scopes",
              "href": "/docs/agent-os/usage/rbac/advanced-scopes"
            },
            {
              "title": "Per-Agent Permissions",
              "href": "/docs/agent-os/usage/rbac/per-agent-permissions"
            },
            {
              "title": "Custom Scope Mappings",
              "href": "/docs/agent-os/usage/rbac/custom-scope-mappings"
            }
          ]
        },
        {
          "title": "Background Tasks",
          "href": "/docs/agent-os/usage/background-hooks-global",
          "items": [
            {
              "title": "Background Hooks (Global)",
              "href": "/docs/agent-os/usage/background-hooks-global"
            },
            {
              "title": "Background Hooks (Per-Hook)",
              "href": "/docs/agent-os/usage/background-hooks-decorator"
            },
            {
              "title": "Output Evaluation (Agent-as-Judge)",
              "href": "/docs/agent-os/usage/background-output-evaluation"
            }
          ]
        },
        {
          "title": "Client",
          "href": "/docs/agent-os/usage/client/basic-client",
          "items": [
            {
              "title": "Basic Client",
              "href": "/docs/agent-os/usage/client/basic-client"
            },
            {
              "title": "Run Agents",
              "href": "/docs/agent-os/usage/client/run-agents"
            },
            {
              "title": "Run Teams",
              "href": "/docs/agent-os/usage/client/run-teams"
            },
            {
              "title": "Run Workflows",
              "href": "/docs/agent-os/usage/client/run-workflows"
            },
            {
              "title": "Sessions",
              "href": "/docs/agent-os/usage/client/session-management"
            },
            {
              "title": "Memories",
              "href": "/docs/agent-os/usage/client/memory-operations"
            },
            {
              "title": "Knowledge",
              "href": "/docs/agent-os/usage/client/knowledge-search"
            }
          ]
        },
        {
          "title": "Remote Execution",
          "href": "/docs/agent-os/usage/remote-execution/remote-agent",
          "items": [
            {
              "title": "Remote Agent",
              "href": "/docs/agent-os/usage/remote-execution/remote-agent"
            },
            {
              "title": "Remote Team",
              "href": "/docs/agent-os/usage/remote-execution/remote-team"
            },
            {
              "title": "Gateway",
              "href": "/docs/agent-os/usage/remote-execution/gateway"
            }
          ]
        },
        {
          "title": "Interfaces",
          "href": "/docs/agent-os/usage/interfaces/whatsapp/basic",
          "items": [
            {
              "title": "WhatsApp",
              "href": "/docs/agent-os/usage/interfaces/whatsapp/basic",
              "items": [
                {
                  "title": "Basic WhatsApp Agent",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/basic"
                },
                {
                  "title": "WhatsApp Image Generation Agent (Tool-based)",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/image-generation-tools"
                },
                {
                  "title": "WhatsApp Reasoning Finance Agent",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/reasoning-agent"
                },
                {
                  "title": "WhatsApp Image Generation Agent (Model-based)",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/image-generation-model"
                },
                {
                  "title": "WhatsApp Agent with Media Support",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/agent-with-media"
                },
                {
                  "title": "WhatsApp Agent with User Memory",
                  "href": "/docs/agent-os/usage/interfaces/whatsapp/agent-with-user-memory"
                }
              ]
            },
            {
              "title": "A2A",
              "href": "/docs/agent-os/usage/interfaces/a2a/basic",
              "items": [
                {
                  "title": "Basic",
                  "href": "/docs/agent-os/usage/interfaces/a2a/basic"
                },
                {
                  "title": "Agent with Tools",
                  "href": "/docs/agent-os/usage/interfaces/a2a/agent-with-tools"
                },
                {
                  "title": "Research Team",
                  "href": "/docs/agent-os/usage/interfaces/a2a/team"
                }
              ]
            },
            {
              "title": "AG-UI",
              "href": "/docs/agent-os/usage/interfaces/ag-ui/basic",
              "items": [
                {
                  "title": "Basic",
                  "href": "/docs/agent-os/usage/interfaces/ag-ui/basic"
                },
                {
                  "title": "Agent with Tools",
                  "href": "/docs/agent-os/usage/interfaces/ag-ui/agent-with-tools"
                },
                {
                  "title": "Research Team",
                  "href": "/docs/agent-os/usage/interfaces/ag-ui/team"
                }
              ]
            },
            {
              "title": "Slack",
              "href": "/docs/agent-os/usage/interfaces/slack/basic",
              "items": [
                {
                  "title": "Basic Slack Agent",
                  "href": "/docs/agent-os/usage/interfaces/slack/basic"
                },
                {
                  "title": "Streaming Deep Research",
                  "href": "/docs/agent-os/usage/interfaces/slack/streaming"
                },
                {
                  "title": "Support Team",
                  "href": "/docs/agent-os/usage/interfaces/slack/support-team"
                },
                {
                  "title": "Channel Summarizer",
                  "href": "/docs/agent-os/usage/interfaces/slack/channel-summarizer"
                },
                {
                  "title": "Slack Workflow",
                  "href": "/docs/agent-os/usage/interfaces/slack/workflow"
                },
                {
                  "title": "Multiple Instances",
                  "href": "/docs/agent-os/usage/interfaces/slack/multiple-instances"
                },
                {
                  "title": "Slack Agent with User Memory",
                  "href": "/docs/agent-os/usage/interfaces/slack/agent-with-user-memory"
                },
                {
                  "title": "Reasoning Finance Agent",
                  "href": "/docs/agent-os/usage/interfaces/slack/reasoning-agent"
                },
                {
                  "title": "File Analyst",
                  "href": "/docs/agent-os/usage/interfaces/slack/file-analyst"
                },
                {
                  "title": "Multi-Bot",
                  "href": "/docs/agent-os/usage/interfaces/slack/multi-bot"
                },
                {
                  "title": "Multimodal Team",
                  "href": "/docs/agent-os/usage/interfaces/slack/multimodal-team"
                },
                {
                  "title": "Multimodal Workflow",
                  "href": "/docs/agent-os/usage/interfaces/slack/multimodal-workflow"
                },
                {
                  "title": "Research Assistant",
                  "href": "/docs/agent-os/usage/interfaces/slack/research-assistant"
                }
              ]
            },
            {
              "title": "Telegram",
              "href": "/docs/agent-os/usage/interfaces/telegram/basic",
              "items": [
                {
                  "title": "Basic Telegram Agent",
                  "href": "/docs/agent-os/usage/interfaces/telegram/basic"
                },
                {
                  "title": "Streaming Telegram Agent",
                  "href": "/docs/agent-os/usage/interfaces/telegram/streaming"
                },
                {
                  "title": "Multi-Agent Telegram Team",
                  "href": "/docs/agent-os/usage/interfaces/telegram/team"
                },
                {
                  "title": "Telegram Agent with Media",
                  "href": "/docs/agent-os/usage/interfaces/telegram/agent-with-media"
                },
                {
                  "title": "Telegram Agent with User Memory",
                  "href": "/docs/agent-os/usage/interfaces/telegram/agent-with-user-memory"
                },
                {
                  "title": "Telegram Reasoning Agent",
                  "href": "/docs/agent-os/usage/interfaces/telegram/reasoning-agent"
                },
                {
                  "title": "Telegram Workflow",
                  "href": "/docs/agent-os/usage/interfaces/telegram/workflow"
                },
                {
                  "title": "Streaming Workflow",
                  "href": "/docs/agent-os/usage/interfaces/telegram/streaming-workflow"
                },
                {
                  "title": "Multiple Instances",
                  "href": "/docs/agent-os/usage/interfaces/telegram/multiple-instances"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "Deploy": [
    {
      "group": "Get Started",
      "items": [
        {
          "title": "Introduction",
          "href": "/docs/deploy/introduction"
        },
        {
          "title": "Templates",
          "href": "/docs/deploy/templates"
        },
        {
          "title": "Interfaces",
          "href": "/docs/deploy/interfaces"
        }
      ]
    },
    {
      "group": "Templates",
      "items": [
        {
          "title": "Docker",
          "href": "/docs/deploy/templates/docker/deploy",
          "items": [
            {
              "title": "Deploy",
              "href": "/docs/deploy/templates/docker/deploy"
            },
            {
              "title": "Reference",
              "href": "/docs/deploy/templates/docker/reference"
            }
          ]
        },
        {
          "title": "Railway",
          "href": "/docs/deploy/templates/railway/deploy",
          "items": [
            {
              "title": "Deploy",
              "href": "/docs/deploy/templates/railway/deploy"
            },
            {
              "title": "Reference",
              "href": "/docs/deploy/templates/railway/reference"
            }
          ]
        },
        {
          "title": "AWS",
          "href": "/docs/deploy/templates/aws/deploy",
          "items": [
            {
              "title": "Deploy",
              "href": "/docs/deploy/templates/aws/deploy"
            },
            {
              "title": "Reference",
              "href": "/docs/deploy/templates/aws/reference"
            },
            {
              "title": "Configure",
              "href": "/docs/deploy/templates/aws/configure/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/deploy/templates/aws/configure/overview"
                },
                {
                  "title": "Setup",
                  "href": "/docs/deploy/templates/aws/configure/install",
                  "items": [
                    {
                      "title": "Install & Setup",
                      "href": "/docs/deploy/templates/aws/configure/install"
                    },
                    {
                      "title": "Infra Settings",
                      "href": "/docs/deploy/templates/aws/configure/infra-settings"
                    },
                    {
                      "title": "Create Git Repo",
                      "href": "/docs/deploy/templates/aws/configure/git-repo"
                    },
                    {
                      "title": "Add New Users",
                      "href": "/docs/deploy/templates/aws/configure/new-users"
                    }
                  ]
                },
                {
                  "title": "Application",
                  "href": "/docs/deploy/templates/aws/configure/development-app",
                  "items": [
                    {
                      "title": "Development Application",
                      "href": "/docs/deploy/templates/aws/configure/development-app"
                    },
                    {
                      "title": "Production Application",
                      "href": "/docs/deploy/templates/aws/configure/production-app"
                    },
                    {
                      "title": "Local",
                      "href": "/docs/deploy/templates/aws/configure/local"
                    },
                    {
                      "title": "Add Python Libraries",
                      "href": "/docs/deploy/templates/aws/configure/python-packages"
                    }
                  ]
                },
                {
                  "title": "Database & Secrets",
                  "href": "/docs/deploy/templates/aws/configure/database",
                  "items": [
                    {
                      "title": "Database",
                      "href": "/docs/deploy/templates/aws/configure/database"
                    },
                    {
                      "title": "Database Tables",
                      "href": "/docs/deploy/templates/aws/configure/database-tables"
                    },
                    {
                      "title": "Secrets",
                      "href": "/docs/deploy/templates/aws/configure/secrets"
                    },
                    {
                      "title": "Env Vars",
                      "href": "/docs/deploy/templates/aws/configure/env-vars"
                    }
                  ]
                },
                {
                  "title": "Quality & CI",
                  "href": "/docs/deploy/templates/aws/configure/code-quality",
                  "items": [
                    {
                      "title": "Code Quality",
                      "href": "/docs/deploy/templates/aws/configure/code-quality"
                    },
                    {
                      "title": "Format & Validate",
                      "href": "/docs/deploy/templates/aws/configure/format-and-validate"
                    },
                    {
                      "title": "CI/CD",
                      "href": "/docs/deploy/templates/aws/configure/ci-cd"
                    }
                  ]
                },
                {
                  "title": "Advanced",
                  "href": "/docs/deploy/templates/aws/configure/efs",
                  "items": [
                    {
                      "title": "EFS",
                      "href": "/docs/deploy/templates/aws/configure/efs"
                    },
                    {
                      "title": "SSH Access",
                      "href": "/docs/deploy/templates/aws/configure/ssh-access"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Go Live",
              "href": "/docs/deploy/templates/aws/go-live/connect",
              "items": [
                {
                  "title": "Connect to AgentOS",
                  "href": "/docs/deploy/templates/aws/go-live/connect"
                },
                {
                  "title": "HTTPS",
                  "href": "/docs/deploy/templates/aws/go-live/https"
                },
                {
                  "title": "Production",
                  "href": "/docs/deploy/templates/aws/go-live/updates"
                },
                {
                  "title": "Verify",
                  "href": "/docs/deploy/templates/aws/go-live/verify"
                }
              ]
            },
            {
              "title": "Manage",
              "href": "/docs/deploy/templates/aws/manage/monitoring",
              "items": [
                {
                  "title": "Monitor",
                  "href": "/docs/deploy/templates/aws/manage/monitoring"
                },
                {
                  "title": "Troubleshoot",
                  "href": "/docs/deploy/templates/aws/manage/troubleshooting"
                }
              ]
            }
          ]
        },
        {
          "title": "Improve Agents",
          "href": "/docs/deploy/templates/improve-agents"
        }
      ]
    },
    {
      "group": "Solutions",
      "items": [
        {
          "title": "Dash",
          "href": "/docs/deploy/templates/dash/overview"
        },
        {
          "title": "Scout",
          "href": "/docs/deploy/templates/scout/overview"
        },
        {
          "title": "Coda",
          "href": "/docs/deploy/templates/coda/overview"
        },
        {
          "title": "PAL",
          "href": "/docs/deploy/templates/pal/overview"
        },
        {
          "title": "Gcode",
          "href": "/docs/deploy/templates/gcode/overview"
        }
      ]
    },
    {
      "group": "Interfaces",
      "items": [
        {
          "title": "Slack",
          "href": "/docs/deploy/interfaces/slack/overview"
        },
        {
          "title": "Telegram",
          "href": "/docs/deploy/interfaces/telegram/overview"
        },
        {
          "title": "WhatsApp",
          "href": "/docs/deploy/interfaces/whatsapp/overview"
        },
        {
          "title": "Discord",
          "href": "/docs/deploy/interfaces/discord/overview"
        },
        {
          "title": "AG-UI",
          "href": "/docs/deploy/interfaces/ag-ui/overview"
        },
        {
          "title": "A2A",
          "href": "/docs/deploy/interfaces/a2a/overview"
        }
      ]
    }
  ],
  "Examples": [
    {
      "group": "Examples",
      "items": [
        {
          "title": "Introduction",
          "href": "/docs/examples/introduction"
        },
        {
          "title": "Basics",
          "href": "/docs/examples/basics/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/basics/overview"
            },
            {
              "title": "Agent with Tools",
              "href": "/docs/examples/basics/agent-with-tools"
            },
            {
              "title": "Agent with Structured Output",
              "href": "/docs/examples/basics/agent-with-structured-output"
            },
            {
              "title": "Agent with Typed I/O",
              "href": "/docs/examples/basics/agent-with-typed-input-output"
            },
            {
              "title": "Agent with Storage",
              "href": "/docs/examples/basics/agent-with-storage"
            },
            {
              "title": "Agent with Memory",
              "href": "/docs/examples/basics/agent-with-memory"
            },
            {
              "title": "Agent with State Management",
              "href": "/docs/examples/basics/agent-with-state-management"
            },
            {
              "title": "Agentic Search over Knowledge",
              "href": "/docs/examples/basics/agent-search-over-knowledge"
            },
            {
              "title": "Custom Tool for Self-Learning",
              "href": "/docs/examples/basics/custom-tool-for-self-learning"
            },
            {
              "title": "Agent with Guardrails",
              "href": "/docs/examples/basics/agent-with-guardrails"
            },
            {
              "title": "Human in the Loop",
              "href": "/docs/examples/basics/human-in-the-loop"
            },
            {
              "title": "Multi-Agent Team",
              "href": "/docs/examples/basics/multi-agent-team"
            },
            {
              "title": "Sequential Workflow",
              "href": "/docs/examples/basics/sequential-workflow"
            },
            {
              "title": "Agent OS",
              "href": "/docs/examples/basics/run"
            }
          ]
        }
      ]
    },
    {
      "group": "Primitives",
      "items": [
        {
          "title": "Agents",
          "href": "/docs/examples/agents/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/agents/overview"
            },
            {
              "title": "Basics",
              "href": "/docs/examples/agents/basics/basic-agent",
              "items": [
                {
                  "title": "Basic Agent",
                  "href": "/docs/examples/agents/basics/basic-agent"
                },
                {
                  "title": "With Instructions",
                  "href": "/docs/examples/agents/basics/agent-with-instructions"
                },
                {
                  "title": "With Tools",
                  "href": "/docs/examples/agents/basics/agent-with-tools"
                }
              ]
            },
            {
              "title": "Input & Output",
              "href": "/docs/examples/agents/input-output/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/input-output/overview"
                },
                {
                  "title": "Streaming",
                  "href": "/docs/examples/agents/input-output/streaming"
                },
                {
                  "title": "Input Formats",
                  "href": "/docs/examples/agents/input-output/input-formats"
                },
                {
                  "title": "Input Schema",
                  "href": "/docs/examples/agents/input-output/input-schema"
                },
                {
                  "title": "Output Model",
                  "href": "/docs/examples/agents/input-output/output-model"
                },
                {
                  "title": "Output Schema",
                  "href": "/docs/examples/agents/input-output/output-schema"
                },
                {
                  "title": "Parser Model",
                  "href": "/docs/examples/agents/input-output/parser-model"
                },
                {
                  "title": "Expected Output",
                  "href": "/docs/examples/agents/input-output/expected-output"
                },
                {
                  "title": "Response As Variable",
                  "href": "/docs/examples/agents/input-output/response-as-variable"
                },
                {
                  "title": "Save To File",
                  "href": "/docs/examples/agents/input-output/save-to-file"
                }
              ]
            },
            {
              "title": "Tools",
              "href": "/docs/examples/agents/tools/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/tools/overview"
                },
                {
                  "title": "Dependencies In Context",
                  "href": "/docs/examples/agents/dependencies/dependencies-in-context"
                },
                {
                  "title": "Dependencies In Tools",
                  "href": "/docs/examples/agents/dependencies/dependencies-in-tools"
                },
                {
                  "title": "Dynamic Tools",
                  "href": "/docs/examples/agents/dependencies/dynamic-tools"
                },
                {
                  "title": "Callable Tools Factory",
                  "href": "/docs/examples/agents/tools/callable-tools"
                },
                {
                  "title": "Session State Tools",
                  "href": "/docs/examples/agents/tools/session-state-tools"
                },
                {
                  "title": "Team Callable Members",
                  "href": "/docs/examples/agents/tools/team-callable-members"
                },
                {
                  "title": "Tool Call Limit",
                  "href": "/docs/examples/agents/tools/tool-call-limit"
                },
                {
                  "title": "Tool Choice",
                  "href": "/docs/examples/agents/tools/tool-choice"
                }
              ]
            },
            {
              "title": "State & Session",
              "href": "/docs/examples/agents/state-and-session/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/state-and-session/overview"
                },
                {
                  "title": "Session State Basic",
                  "href": "/docs/examples/agents/state-and-session/session-state-basic"
                },
                {
                  "title": "Chat History",
                  "href": "/docs/examples/agents/state-and-session/chat-history"
                },
                {
                  "title": "Persistent Session",
                  "href": "/docs/examples/agents/state-and-session/persistent-session"
                },
                {
                  "title": "Session State Events",
                  "href": "/docs/examples/agents/state-and-session/session-state-events"
                },
                {
                  "title": "Dynamic Session State",
                  "href": "/docs/examples/agents/state-and-session/dynamic-session-state"
                },
                {
                  "title": "Session State Manual Update",
                  "href": "/docs/examples/agents/state-and-session/session-state-manual-update"
                },
                {
                  "title": "Session State Multiple Users",
                  "href": "/docs/examples/agents/state-and-session/session-state-multiple-users"
                },
                {
                  "title": "Session State Advanced",
                  "href": "/docs/examples/agents/state-and-session/session-state-advanced"
                },
                {
                  "title": "Agentic Session State",
                  "href": "/docs/examples/agents/state-and-session/agentic-session-state"
                },
                {
                  "title": "Session Options",
                  "href": "/docs/examples/agents/state-and-session/session-options"
                },
                {
                  "title": "Session Summary",
                  "href": "/docs/examples/agents/state-and-session/session-summary"
                },
                {
                  "title": "Last N Session Messages",
                  "href": "/docs/examples/agents/state-and-session/last-n-session-messages"
                }
              ]
            },
            {
              "title": "Knowledge",
              "href": "/docs/examples/agents/knowledge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/knowledge/overview"
                },
                {
                  "title": "Traditional Rag",
                  "href": "/docs/examples/agents/knowledge/traditional-rag"
                },
                {
                  "title": "Agentic Rag",
                  "href": "/docs/examples/agents/knowledge/agentic-rag"
                },
                {
                  "title": "Agentic Rag With Reasoning",
                  "href": "/docs/examples/agents/knowledge/agentic-rag-with-reasoning"
                },
                {
                  "title": "Agentic Rag With Reranking",
                  "href": "/docs/examples/agents/knowledge/agentic-rag-with-reranking"
                },
                {
                  "title": "Rag Custom Embeddings",
                  "href": "/docs/examples/agents/knowledge/rag-custom-embeddings"
                },
                {
                  "title": "Knowledge Filters",
                  "href": "/docs/examples/agents/knowledge/knowledge-filters"
                },
                {
                  "title": "Custom Retriever",
                  "href": "/docs/examples/agents/knowledge/custom-retriever"
                },
                {
                  "title": "References Format",
                  "href": "/docs/examples/agents/knowledge/references-format"
                }
              ]
            },
            {
              "title": "Guardrails",
              "href": "/docs/examples/agents/guardrails/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/guardrails/overview"
                },
                {
                  "title": "Custom Guardrail",
                  "href": "/docs/examples/agents/guardrails/custom-guardrail"
                },
                {
                  "title": "Output Guardrail",
                  "href": "/docs/examples/agents/guardrails/output-guardrail"
                },
                {
                  "title": "Openai Moderation",
                  "href": "/docs/examples/agents/guardrails/openai-moderation"
                },
                {
                  "title": "Pii Detection",
                  "href": "/docs/examples/agents/guardrails/pii-detection"
                },
                {
                  "title": "Prompt Injection",
                  "href": "/docs/examples/agents/guardrails/prompt-injection"
                }
              ]
            },
            {
              "title": "Human in the Loop",
              "href": "/docs/examples/agents/human-in-the-loop/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/human-in-the-loop/overview"
                },
                {
                  "title": "Approval Async",
                  "href": "/docs/examples/agents/approvals/approval-async"
                },
                {
                  "title": "Approval Basic",
                  "href": "/docs/examples/agents/approvals/approval-basic"
                },
                {
                  "title": "Approval External Execution",
                  "href": "/docs/examples/agents/approvals/approval-external-execution"
                },
                {
                  "title": "Approval List And Resolve",
                  "href": "/docs/examples/agents/approvals/approval-list-and-resolve"
                },
                {
                  "title": "Approval Team",
                  "href": "/docs/examples/agents/approvals/approval-team"
                },
                {
                  "title": "Approval User Input",
                  "href": "/docs/examples/agents/approvals/approval-user-input"
                },
                {
                  "title": "Audit Approval Async",
                  "href": "/docs/examples/agents/approvals/audit-approval-async"
                },
                {
                  "title": "Audit Approval Confirmation",
                  "href": "/docs/examples/agents/approvals/audit-approval-confirmation"
                },
                {
                  "title": "Audit Approval External",
                  "href": "/docs/examples/agents/approvals/audit-approval-external"
                },
                {
                  "title": "Audit Approval Overview",
                  "href": "/docs/examples/agents/approvals/audit-approval-overview"
                },
                {
                  "title": "Audit Approval User Input",
                  "href": "/docs/examples/agents/approvals/audit-approval-user-input"
                },
                {
                  "title": "Agentic User Input",
                  "href": "/docs/examples/agents/human-in-the-loop/agentic-user-input"
                },
                {
                  "title": "Confirmation Advanced",
                  "href": "/docs/examples/agents/human-in-the-loop/confirmation-advanced"
                },
                {
                  "title": "Confirmation Required",
                  "href": "/docs/examples/agents/human-in-the-loop/confirmation-required"
                },
                {
                  "title": "Confirmation Required MCP Toolkit",
                  "href": "/docs/examples/agents/human-in-the-loop/confirmation-required-mcp-toolkit"
                },
                {
                  "title": "Confirmation Toolkit",
                  "href": "/docs/examples/agents/human-in-the-loop/confirmation-toolkit"
                },
                {
                  "title": "External Tool Execution",
                  "href": "/docs/examples/agents/human-in-the-loop/external-tool-execution"
                },
                {
                  "title": "User Input Required",
                  "href": "/docs/examples/agents/human-in-the-loop/user-input-required"
                }
              ]
            },
            {
              "title": "Multimodal",
              "href": "/docs/examples/agents/multimodal/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/multimodal/overview"
                },
                {
                  "title": "Image To Text",
                  "href": "/docs/examples/agents/multimodal/image-to-text"
                },
                {
                  "title": "Image To Structured Output",
                  "href": "/docs/examples/agents/multimodal/image-to-structured-output"
                },
                {
                  "title": "Image To Image",
                  "href": "/docs/examples/agents/multimodal/image-to-image"
                },
                {
                  "title": "Image To Audio",
                  "href": "/docs/examples/agents/multimodal/image-to-audio"
                },
                {
                  "title": "Audio To Text",
                  "href": "/docs/examples/agents/multimodal/audio-to-text"
                },
                {
                  "title": "Audio Input Output",
                  "href": "/docs/examples/agents/multimodal/audio-input-output"
                },
                {
                  "title": "Audio Streaming",
                  "href": "/docs/examples/agents/multimodal/audio-streaming"
                },
                {
                  "title": "Audio Sentiment Analysis",
                  "href": "/docs/examples/agents/multimodal/audio-sentiment-analysis"
                },
                {
                  "title": "Media Input For Tool",
                  "href": "/docs/examples/agents/multimodal/media-input-for-tool"
                },
                {
                  "title": "Video Caption",
                  "href": "/docs/examples/agents/multimodal/video-caption"
                }
              ]
            },
            {
              "title": "Hooks & Context",
              "href": "/docs/examples/agents/hooks/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/hooks/overview"
                },
                {
                  "title": "Few Shot Learning",
                  "href": "/docs/examples/agents/context-management/few-shot-learning"
                },
                {
                  "title": "Filter Tool Calls From History",
                  "href": "/docs/examples/agents/context-management/filter-tool-calls-from-history"
                },
                {
                  "title": "Instructions",
                  "href": "/docs/examples/agents/context-management/instructions"
                },
                {
                  "title": "Instructions With State",
                  "href": "/docs/examples/agents/context-management/instructions-with-state"
                },
                {
                  "title": "Introduction Message",
                  "href": "/docs/examples/agents/context-management/introduction-message"
                },
                {
                  "title": "System Message",
                  "href": "/docs/examples/agents/context-management/system-message"
                },
                {
                  "title": "Post Hook Output",
                  "href": "/docs/examples/agents/hooks/post-hook-output"
                },
                {
                  "title": "Pre Hook Input",
                  "href": "/docs/examples/agents/hooks/pre-hook-input"
                },
                {
                  "title": "Session State Hooks",
                  "href": "/docs/examples/agents/hooks/session-state-hooks"
                },
                {
                  "title": "Stream Hook",
                  "href": "/docs/examples/agents/hooks/stream-hook"
                },
                {
                  "title": "Tool Hooks",
                  "href": "/docs/examples/agents/hooks/tool-hooks"
                }
              ]
            },
            {
              "title": "Advanced",
              "href": "/docs/examples/agents/advanced/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agents/advanced/overview"
                },
                {
                  "title": "Advanced Compression",
                  "href": "/docs/examples/agents/advanced/advanced-compression"
                },
                {
                  "title": "Serialization",
                  "href": "/docs/examples/agents/advanced/agent-serialization"
                },
                {
                  "title": "03 Automatic Cultural Management",
                  "href": "/docs/examples/agents/advanced/automatic-cultural-management"
                },
                {
                  "title": "Background Execution",
                  "href": "/docs/examples/agents/advanced/background-execution"
                },
                {
                  "title": "Background Execution Structured",
                  "href": "/docs/examples/agents/advanced/background-execution-structured"
                },
                {
                  "title": "SSE Reconnect",
                  "href": "/docs/examples/agents/advanced/sse-reconnect"
                },
                {
                  "title": "Basic Agent Events",
                  "href": "/docs/examples/agents/advanced/basic-agent-events"
                },
                {
                  "title": "Cache Model Response",
                  "href": "/docs/examples/agents/advanced/cache-model-response"
                },
                {
                  "title": "Cancel Run",
                  "href": "/docs/examples/agents/advanced/cancel-run"
                },
                {
                  "title": "Compression Events",
                  "href": "/docs/examples/agents/advanced/compression-events"
                },
                {
                  "title": "Concurrent Execution",
                  "href": "/docs/examples/agents/advanced/concurrent-execution"
                },
                {
                  "title": "01 Create Cultural Knowledge",
                  "href": "/docs/examples/agents/advanced/create-cultural-knowledge"
                },
                {
                  "title": "Custom Cancellation Manager",
                  "href": "/docs/examples/agents/advanced/custom-cancellation-manager"
                },
                {
                  "title": "Custom Logging",
                  "href": "/docs/examples/agents/advanced/custom-logging"
                },
                {
                  "title": "Debug",
                  "href": "/docs/examples/agents/advanced/debug"
                },
                {
                  "title": "04 Manually Add Culture",
                  "href": "/docs/examples/agents/advanced/manually-add-culture"
                },
                {
                  "title": "Multi-Model Metrics",
                  "href": "/docs/examples/agents/advanced/multi-model-metrics"
                },
                {
                  "title": "Culture Metrics",
                  "href": "/docs/examples/agents/advanced/culture-metrics"
                },
                {
                  "title": "Session Metrics",
                  "href": "/docs/examples/agents/advanced/session-metrics"
                },
                {
                  "title": "Session Summary Metrics",
                  "href": "/docs/examples/agents/advanced/session-summary-metrics"
                },
                {
                  "title": "Streaming Metrics",
                  "href": "/docs/examples/agents/advanced/streaming-metrics"
                },
                {
                  "title": "Tool Call Metrics",
                  "href": "/docs/examples/agents/advanced/tool-call-metrics"
                },
                {
                  "title": "Background Execution Metrics",
                  "href": "/docs/examples/agents/advanced/background-execution-metrics"
                },
                {
                  "title": "Reasoning Agent Events",
                  "href": "/docs/examples/agents/advanced/reasoning-agent-events"
                },
                {
                  "title": "Retries",
                  "href": "/docs/examples/agents/advanced/retries"
                },
                {
                  "title": "Tool Call Compression",
                  "href": "/docs/examples/agents/advanced/tool-call-compression"
                },
                {
                  "title": "02 Use Cultural Knowledge In Agent",
                  "href": "/docs/examples/agents/advanced/use-cultural-knowledge-in-agent"
                },
                {
                  "title": "Learning Machine",
                  "href": "/docs/examples/agents/memory-and-learning/learning-machine"
                },
                {
                  "title": "Memory Manager",
                  "href": "/docs/examples/agents/memory-and-learning/memory-manager"
                },
                {
                  "title": "Basic Reasoning",
                  "href": "/docs/examples/agents/reasoning/basic-reasoning"
                },
                {
                  "title": "Reasoning With Model",
                  "href": "/docs/examples/agents/reasoning/reasoning-with-model"
                },
                {
                  "title": "Basic Skills",
                  "href": "/docs/examples/agents/skills/basic-skills"
                },
                {
                  "title": "Check Style",
                  "href": "/docs/examples/agents/skills/sample-skills/code-review/scripts/check-style"
                },
                {
                  "title": "Commit Message",
                  "href": "/docs/examples/agents/skills/sample-skills/git-workflow/scripts/commit-message"
                }
              ]
            }
          ]
        },
        {
          "title": "Teams",
          "href": "/docs/examples/teams/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/teams/overview"
            },
            {
              "title": "Basics",
              "href": "/docs/examples/teams/basics/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/basics/overview"
                },
                {
                  "title": "Basic Coordination",
                  "href": "/docs/examples/teams/basics/basic-coordination"
                },
                {
                  "title": "Broadcast Mode",
                  "href": "/docs/examples/teams/basics/broadcast-mode"
                },
                {
                  "title": "Task Mode",
                  "href": "/docs/examples/teams/basics/task-mode"
                },
                {
                  "title": "Respond Directly Router Team",
                  "href": "/docs/examples/teams/basics/respond-directly-router-team"
                },
                {
                  "title": "Delegate To All Members",
                  "href": "/docs/examples/teams/basics/delegate-to-all-members"
                },
                {
                  "title": "Share Member Interactions",
                  "href": "/docs/examples/teams/basics/share-member-interactions"
                },
                {
                  "title": "Concurrent Member Agents",
                  "href": "/docs/examples/teams/basics/concurrent-member-agents"
                },
                {
                  "title": "History Of Members",
                  "href": "/docs/examples/teams/basics/history-of-members"
                },
                {
                  "title": "Respond Directly With History",
                  "href": "/docs/examples/teams/basics/respond-directly-with-history"
                },
                {
                  "title": "History",
                  "href": "/docs/examples/teams/basics/team-history"
                },
                {
                  "title": "Nested Teams",
                  "href": "/docs/examples/teams/basics/nested-teams"
                }
              ]
            },
            {
              "title": "Modes",
              "href": "/docs/examples/teams/modes/tasks/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/modes/tasks/overview"
                },
                {
                  "title": "Basic Broadcast Mode Example",
                  "href": "/docs/examples/teams/modes/broadcast/basic"
                },
                {
                  "title": "Broadcast Mode for Structured Debate",
                  "href": "/docs/examples/teams/modes/broadcast/debate"
                },
                {
                  "title": "Broadcast Mode for Parallel Research Sweep",
                  "href": "/docs/examples/teams/modes/broadcast/research-sweep"
                },
                {
                  "title": "Basic Coordinate Mode Example",
                  "href": "/docs/examples/teams/modes/coordinate/basic"
                },
                {
                  "title": "Coordinate Mode with Structured Output",
                  "href": "/docs/examples/teams/modes/coordinate/structured-output"
                },
                {
                  "title": "Coordinate Mode with Tools",
                  "href": "/docs/examples/teams/modes/coordinate/with-tools"
                },
                {
                  "title": "Basic Route Mode Example",
                  "href": "/docs/examples/teams/modes/route/basic"
                },
                {
                  "title": "Specialist Router Example",
                  "href": "/docs/examples/teams/modes/route/specialist-router"
                },
                {
                  "title": "Route Mode with Fallback Agent",
                  "href": "/docs/examples/teams/modes/route/with-fallback"
                },
                {
                  "title": "Basic Tasks Mode Example",
                  "href": "/docs/examples/teams/modes/tasks/basic"
                },
                {
                  "title": "Tasks with Dependencies Example",
                  "href": "/docs/examples/teams/modes/tasks/dependencies"
                },
                {
                  "title": "Parallel Tasks Execution Example",
                  "href": "/docs/examples/teams/modes/tasks/parallel"
                }
              ]
            },
            {
              "title": "Structured I/O",
              "href": "/docs/examples/teams/structured-input-output/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/structured-input-output/overview"
                },
                {
                  "title": "Input Formats",
                  "href": "/docs/examples/teams/structured-input-output/input-formats"
                },
                {
                  "title": "Input Schema",
                  "href": "/docs/examples/teams/structured-input-output/input-schema"
                },
                {
                  "title": "Pydantic Input",
                  "href": "/docs/examples/teams/structured-input-output/pydantic-input"
                },
                {
                  "title": "Output Model",
                  "href": "/docs/examples/teams/structured-input-output/output-model"
                },
                {
                  "title": "Pydantic Output",
                  "href": "/docs/examples/teams/structured-input-output/pydantic-output"
                },
                {
                  "title": "JSON Schema Output",
                  "href": "/docs/examples/teams/structured-input-output/json-schema-output"
                },
                {
                  "title": "Output Schema Override",
                  "href": "/docs/examples/teams/structured-input-output/output-schema-override"
                },
                {
                  "title": "Structured Output Streaming",
                  "href": "/docs/examples/teams/structured-input-output/structured-output-streaming"
                },
                {
                  "title": "Response As Variable",
                  "href": "/docs/examples/teams/structured-input-output/response-as-variable"
                },
                {
                  "title": "Parser Model",
                  "href": "/docs/examples/teams/structured-input-output/parser-model"
                }
              ]
            },
            {
              "title": "Human in the Loop",
              "href": "/docs/examples/teams/human-in-the-loop/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/human-in-the-loop/overview"
                },
                {
                  "title": "Confirmation Required",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-required"
                },
                {
                  "title": "Reject Member Tool Call",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-rejected"
                },
                {
                  "title": "Team Tool with User Input",
                  "href": "/docs/examples/teams/human-in-the-loop/user-input-required"
                },
                {
                  "title": "Confirm Team Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/team-tool-confirmation"
                },
                {
                  "title": "External Tool Execution",
                  "href": "/docs/examples/teams/human-in-the-loop/external-tool-execution"
                },
                {
                  "title": "Async: Confirm Member Agent Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-required-async"
                },
                {
                  "title": "Streaming: Confirm Member Agent Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-required-stream"
                },
                {
                  "title": "Streaming: Reject Member Tool Call.",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-rejected-stream"
                },
                {
                  "title": "Async Streaming: Confirm Member Agent Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/confirmation-required-async-stream"
                },
                {
                  "title": "Streaming with External Execution of Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/external-tool-execution-stream"
                },
                {
                  "title": "Streaming: Confirm Team Tool",
                  "href": "/docs/examples/teams/human-in-the-loop/team-tool-confirmation-stream"
                },
                {
                  "title": "Streaming: Member Tool with User Input",
                  "href": "/docs/examples/teams/human-in-the-loop/user-input-required-stream"
                }
              ]
            },
            {
              "title": "Guardrails",
              "href": "/docs/examples/teams/guardrails/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/guardrails/overview"
                },
                {
                  "title": "OpenAI Moderation",
                  "href": "/docs/examples/teams/guardrails/openai-moderation"
                },
                {
                  "title": "PII Detection",
                  "href": "/docs/examples/teams/guardrails/pii-detection"
                },
                {
                  "title": "Prompt Injection",
                  "href": "/docs/examples/teams/guardrails/prompt-injection"
                }
              ]
            },
            {
              "title": "Knowledge & RAG",
              "href": "/docs/examples/teams/knowledge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/knowledge/overview"
                },
                {
                  "title": "Distributed RAG With LanceDB",
                  "href": "/docs/examples/teams/distributed-rag/distributed-rag-lancedb"
                },
                {
                  "title": "Distributed RAG With PgVector",
                  "href": "/docs/examples/teams/distributed-rag/distributed-rag-pgvector"
                },
                {
                  "title": "Distributed RAG With Reranking",
                  "href": "/docs/examples/teams/distributed-rag/distributed-rag-with-reranking"
                },
                {
                  "title": "With Agentic Knowledge Filters",
                  "href": "/docs/examples/teams/knowledge/team-with-agentic-knowledge-filters"
                },
                {
                  "title": "With Custom Retriever",
                  "href": "/docs/examples/teams/knowledge/team-with-custom-retriever"
                },
                {
                  "title": "With Knowledge",
                  "href": "/docs/examples/teams/knowledge/team-with-knowledge"
                },
                {
                  "title": "With Knowledge Filters",
                  "href": "/docs/examples/teams/knowledge/team-with-knowledge-filters"
                },
                {
                  "title": "Coordinated Agentic RAG",
                  "href": "/docs/examples/teams/search-coordination/coordinated-agentic-rag"
                },
                {
                  "title": "Coordinated Reasoning RAG",
                  "href": "/docs/examples/teams/search-coordination/coordinated-reasoning-rag"
                },
                {
                  "title": "Distributed Infinity Search",
                  "href": "/docs/examples/teams/search-coordination/distributed-infinity-search"
                }
              ]
            },
            {
              "title": "Learning & Memory",
              "href": "/docs/examples/teams/learning/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/learning/overview"
                },
                {
                  "title": "Learning: Always Mode",
                  "href": "/docs/examples/teams/learning/team-always-learn"
                },
                {
                  "title": "Learning: Configured Stores",
                  "href": "/docs/examples/teams/learning/team-configured-learning"
                },
                {
                  "title": "Learning: Decision Logging",
                  "href": "/docs/examples/teams/learning/team-decision-log"
                },
                {
                  "title": "Learning: Entity Memory",
                  "href": "/docs/examples/teams/learning/team-entity-memory"
                },
                {
                  "title": "Learning: Learned Knowledge",
                  "href": "/docs/examples/teams/learning/team-learned-knowledge"
                },
                {
                  "title": "Learning: Session Planning",
                  "href": "/docs/examples/teams/learning/team-session-planning"
                },
                {
                  "title": "Learning Machine",
                  "href": "/docs/examples/teams/memory/learning-machine"
                },
                {
                  "title": "With Agentic Memory",
                  "href": "/docs/examples/teams/memory/team-with-agentic-memory"
                },
                {
                  "title": "With Memory Manager",
                  "href": "/docs/examples/teams/memory/team-with-memory-manager"
                }
              ]
            },
            {
              "title": "State & Session",
              "href": "/docs/examples/teams/state/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/state/overview"
                },
                {
                  "title": "Chat History",
                  "href": "/docs/examples/teams/session/chat-history"
                },
                {
                  "title": "Persistent Session",
                  "href": "/docs/examples/teams/session/persistent-session"
                },
                {
                  "title": "Search Session History",
                  "href": "/docs/examples/teams/session/search-session-history"
                },
                {
                  "title": "Session Options",
                  "href": "/docs/examples/teams/session/session-options"
                },
                {
                  "title": "Session Summary",
                  "href": "/docs/examples/teams/session/session-summary"
                },
                {
                  "title": "Share Session With Agent",
                  "href": "/docs/examples/teams/session/share-session-with-agent"
                },
                {
                  "title": "Agentic Session State",
                  "href": "/docs/examples/teams/state/agentic-session-state"
                },
                {
                  "title": "Change State On Run",
                  "href": "/docs/examples/teams/state/change-state-on-run"
                },
                {
                  "title": "Nested Shared State",
                  "href": "/docs/examples/teams/state/nested-shared-state"
                },
                {
                  "title": "Overwrite Stored Session State",
                  "href": "/docs/examples/teams/state/overwrite-stored-session-state"
                },
                {
                  "title": "State Sharing",
                  "href": "/docs/examples/teams/state/state-sharing"
                }
              ]
            },
            {
              "title": "Tools & Hooks",
              "href": "/docs/examples/teams/tools/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/tools/overview"
                },
                {
                  "title": "Post Hook Output",
                  "href": "/docs/examples/teams/hooks/post-hook-output"
                },
                {
                  "title": "Pre Hook Input",
                  "href": "/docs/examples/teams/hooks/pre-hook-input"
                },
                {
                  "title": "Stream Hook",
                  "href": "/docs/examples/teams/hooks/stream-hook"
                },
                {
                  "title": "Async Tools",
                  "href": "/docs/examples/teams/tools/async-tools"
                },
                {
                  "title": "Custom Tools",
                  "href": "/docs/examples/teams/tools/custom-tools"
                },
                {
                  "title": "Member Tool Hooks",
                  "href": "/docs/examples/teams/tools/member-tool-hooks"
                },
                {
                  "title": "Tool Hooks",
                  "href": "/docs/examples/teams/tools/tool-hooks"
                }
              ]
            },
            {
              "title": "Skills",
              "href": "/docs/examples/teams/skills/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/skills/overview"
                },
                {
                  "title": "Basic Skills Team",
                  "href": "/docs/examples/teams/skills/basic-skills-team"
                }
              ]
            },
            {
              "title": "Advanced",
              "href": "/docs/examples/teams/task-mode/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/teams/task-mode/overview"
                },
                {
                  "title": "Tool Call Compression",
                  "href": "/docs/examples/teams/context-compression/tool-call-compression"
                },
                {
                  "title": "Tool Call Compression With Manager",
                  "href": "/docs/examples/teams/context-compression/tool-call-compression-with-manager"
                },
                {
                  "title": "Few Shot Learning",
                  "href": "/docs/examples/teams/context-management/few-shot-learning"
                },
                {
                  "title": "Filter Tool Calls From History",
                  "href": "/docs/examples/teams/context-management/filter-tool-calls-from-history"
                },
                {
                  "title": "Introduction",
                  "href": "/docs/examples/teams/context-management/introduction"
                },
                {
                  "title": "Dependencies In Context",
                  "href": "/docs/examples/teams/dependencies/dependencies-in-context"
                },
                {
                  "title": "Dependencies In Tools",
                  "href": "/docs/examples/teams/dependencies/dependencies-in-tools"
                },
                {
                  "title": "Dependencies To Members",
                  "href": "/docs/examples/teams/dependencies/dependencies-to-members"
                },
                {
                  "title": "Metrics",
                  "href": "/docs/examples/teams/metrics/team-metrics"
                },
                {
                  "title": "Team Streaming Metrics",
                  "href": "/docs/examples/teams/metrics/team-streaming-metrics"
                },
                {
                  "title": "Team Session Metrics",
                  "href": "/docs/examples/teams/metrics/team-session-metrics"
                },
                {
                  "title": "Team Tool Metrics",
                  "href": "/docs/examples/teams/metrics/team-tool-metrics"
                },
                {
                  "title": "Audio Sentiment Analysis",
                  "href": "/docs/examples/teams/multimodal/audio-sentiment-analysis"
                },
                {
                  "title": "Audio To Text",
                  "href": "/docs/examples/teams/multimodal/audio-to-text"
                },
                {
                  "title": "Generate Image With Team",
                  "href": "/docs/examples/teams/multimodal/generate-image-with-team"
                },
                {
                  "title": "Image To Image Transformation",
                  "href": "/docs/examples/teams/multimodal/image-to-image-transformation"
                },
                {
                  "title": "Image To Structured Output",
                  "href": "/docs/examples/teams/multimodal/image-to-structured-output"
                },
                {
                  "title": "Image To Text",
                  "href": "/docs/examples/teams/multimodal/image-to-text"
                },
                {
                  "title": "Media Input For Tool",
                  "href": "/docs/examples/teams/multimodal/media-input-for-tool"
                },
                {
                  "title": "Video Caption Generation",
                  "href": "/docs/examples/teams/multimodal/video-caption-generation"
                },
                {
                  "title": "Background Execution",
                  "href": "/docs/examples/teams/other/background-execution"
                },
                {
                  "title": "SSE Reconnect",
                  "href": "/docs/examples/teams/other/sse-reconnect"
                },
                {
                  "title": "Reasoning Multi Purpose Team",
                  "href": "/docs/examples/teams/reasoning/reasoning-multi-purpose-team"
                },
                {
                  "title": "Cancel Run",
                  "href": "/docs/examples/teams/run-control/cancel-run"
                },
                {
                  "title": "Model Inheritance",
                  "href": "/docs/examples/teams/run-control/model-inheritance"
                },
                {
                  "title": "Remote Team",
                  "href": "/docs/examples/teams/run-control/remote-team"
                },
                {
                  "title": "Retries",
                  "href": "/docs/examples/teams/run-control/retries"
                },
                {
                  "title": "Events",
                  "href": "/docs/examples/teams/streaming/team-events"
                },
                {
                  "title": "Streaming",
                  "href": "/docs/examples/teams/streaming/team-streaming"
                },
                {
                  "title": "Async Task Mode Example",
                  "href": "/docs/examples/teams/task-mode/async-task-mode"
                },
                {
                  "title": "Basic Task Mode Example",
                  "href": "/docs/examples/teams/task-mode/basic-task-mode"
                },
                {
                  "title": "Task Mode with Custom Tools",
                  "href": "/docs/examples/teams/task-mode/custom-tools"
                },
                {
                  "title": "Task Dependencies Example",
                  "href": "/docs/examples/teams/task-mode/dependency-chain"
                },
                {
                  "title": "Multi-Run Session with Task Mode",
                  "href": "/docs/examples/teams/task-mode/multi-run-session"
                },
                {
                  "title": "Parallel Task Execution Example",
                  "href": "/docs/examples/teams/task-mode/parallel-tasks"
                },
                {
                  "title": "Task Mode with Tool-Equipped Agents",
                  "href": "/docs/examples/teams/task-mode/task-mode-with-tools"
                }
              ]
            }
          ]
        },
        {
          "title": "Workflows",
          "href": "/docs/examples/workflows/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/workflows/overview"
            },
            {
              "title": "Getting Started",
              "href": "/docs/examples/workflows/basic-workflows/step-with-function/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/workflows/basic-workflows/step-with-function/overview"
                },
                {
                  "title": "Function Workflow",
                  "href": "/docs/examples/workflows/basic-workflows/function-workflows/function-workflow"
                },
                {
                  "title": "Sequence Of Steps",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/sequence-of-steps"
                },
                {
                  "title": "Sequence With Functions",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/sequence-with-functions"
                },
                {
                  "title": "Workflow Using Steps",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/workflow-using-steps"
                },
                {
                  "title": "Workflow Using Nested Steps",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/workflow-using-steps-nested"
                },
                {
                  "title": "Workflow With File Input",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/workflow-with-file-input"
                },
                {
                  "title": "Workflow With Session Metrics",
                  "href": "/docs/examples/workflows/basic-workflows/sequence-of-steps/workflow-with-session-metrics"
                },
                {
                  "title": "Step With Additional Data",
                  "href": "/docs/examples/workflows/basic-workflows/step-with-function/step-with-additional-data"
                },
                {
                  "title": "Step With Class Executor",
                  "href": "/docs/examples/workflows/basic-workflows/step-with-function/step-with-class"
                },
                {
                  "title": "Step With Function",
                  "href": "/docs/examples/workflows/basic-workflows/step-with-function/step-with-function"
                }
              ]
            },
            {
              "title": "Execution Patterns",
              "href": "/docs/examples/workflows/conditional-execution/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/workflows/conditional-execution/overview"
                },
                {
                  "title": "Condition Basic",
                  "href": "/docs/examples/workflows/conditional-execution/condition-basic"
                },
                {
                  "title": "Condition With Else",
                  "href": "/docs/examples/workflows/conditional-execution/condition-with-else"
                },
                {
                  "title": "Condition With List",
                  "href": "/docs/examples/workflows/conditional-execution/condition-with-list"
                },
                {
                  "title": "Condition With Parallel",
                  "href": "/docs/examples/workflows/conditional-execution/condition-with-parallel"
                },
                {
                  "title": "Loop Basic",
                  "href": "/docs/examples/workflows/loop-execution/loop-basic"
                },
                {
                  "title": "Loop With Parallel",
                  "href": "/docs/examples/workflows/loop-execution/loop-with-parallel"
                },
                {
                  "title": "Parallel Basic",
                  "href": "/docs/examples/workflows/parallel-execution/parallel-basic"
                },
                {
                  "title": "Parallel With Condition",
                  "href": "/docs/examples/workflows/parallel-execution/parallel-with-condition"
                }
              ]
            },
            {
              "title": "Branching & Routing",
              "href": "/docs/examples/workflows/conditional-branching/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/workflows/conditional-branching/overview"
                },
                {
                  "title": "CEL: Additional Data",
                  "href": "/docs/examples/workflows/cel-expressions/condition/cel-additional-data"
                },
                {
                  "title": "CEL: Basic",
                  "href": "/docs/examples/workflows/cel-expressions/condition/cel-basic"
                },
                {
                  "title": "CEL: Previous Step",
                  "href": "/docs/examples/workflows/cel-expressions/condition/cel-previous-step"
                },
                {
                  "title": "CEL: Previous Step Output",
                  "href": "/docs/examples/workflows/cel-expressions/condition/cel-previous-step-outputs"
                },
                {
                  "title": "CEL Session State",
                  "href": "/docs/examples/workflows/cel-expressions/condition/cel-session-state"
                },
                {
                  "title": "CEL: Compound Exit",
                  "href": "/docs/examples/workflows/cel-expressions/loop/cel-compound-exit"
                },
                {
                  "title": "CEL: Content Keyword",
                  "href": "/docs/examples/workflows/cel-expressions/loop/cel-content-keyword"
                },
                {
                  "title": "CEL: Iteration Limit.",
                  "href": "/docs/examples/workflows/cel-expressions/loop/cel-iteration-limit"
                },
                {
                  "title": "CEL: Step Output Check",
                  "href": "/docs/examples/workflows/cel-expressions/loop/cel-step-outputs-check"
                },
                {
                  "title": "CEL: Additional Data Route",
                  "href": "/docs/examples/workflows/cel-expressions/router/cel-additional-data-route"
                },
                {
                  "title": "CEL: Previous Step Route",
                  "href": "/docs/examples/workflows/cel-expressions/router/cel-previous-step-route"
                },
                {
                  "title": "CEL: Session State Route",
                  "href": "/docs/examples/workflows/cel-expressions/router/cel-session-state-route"
                },
                {
                  "title": "CEL: Ternary Operator",
                  "href": "/docs/examples/workflows/cel-expressions/router/cel-ternary"
                },
                {
                  "title": "CEL: Step Choices",
                  "href": "/docs/examples/workflows/cel-expressions/router/cel-using-step-choices"
                },
                {
                  "title": "Loop In Choices",
                  "href": "/docs/examples/workflows/conditional-branching/loop-in-choices"
                },
                {
                  "title": "Nested Choices",
                  "href": "/docs/examples/workflows/conditional-branching/nested-choices"
                },
                {
                  "title": "Router Basic",
                  "href": "/docs/examples/workflows/conditional-branching/router-basic"
                },
                {
                  "title": "Router With Loop",
                  "href": "/docs/examples/workflows/conditional-branching/router-with-loop"
                },
                {
                  "title": "Selector Media Pipeline",
                  "href": "/docs/examples/workflows/conditional-branching/selector-media-pipeline"
                },
                {
                  "title": "Selector Types",
                  "href": "/docs/examples/workflows/conditional-branching/selector-types"
                },
                {
                  "title": "Step Choices Parameter",
                  "href": "/docs/examples/workflows/conditional-branching/step-choices-parameter"
                },
                {
                  "title": "String Selector",
                  "href": "/docs/examples/workflows/conditional-branching/string-selector"
                }
              ]
            },
            {
              "title": "Advanced",
              "href": "/docs/examples/workflows/advanced-concepts/workflow-agent/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/workflows/advanced-concepts/workflow-agent/overview"
                },
                {
                  "title": "Background Poll",
                  "href": "/docs/examples/workflows/advanced-concepts/background-execution/background-poll"
                },
                {
                  "title": "Background Execution WebSocket Client",
                  "href": "/docs/examples/workflows/advanced-concepts/background-execution/websocket-client"
                },
                {
                  "title": "Background Execution WebSocket Server",
                  "href": "/docs/examples/workflows/advanced-concepts/background-execution/websocket-server"
                },
                {
                  "title": "Early Stop Basic",
                  "href": "/docs/examples/workflows/advanced-concepts/early-stopping/early-stop-basic"
                },
                {
                  "title": "Early Stop Condition",
                  "href": "/docs/examples/workflows/advanced-concepts/early-stopping/early-stop-condition"
                },
                {
                  "title": "Early Stop Loop",
                  "href": "/docs/examples/workflows/advanced-concepts/early-stopping/early-stop-loop"
                },
                {
                  "title": "Early Stop Parallel",
                  "href": "/docs/examples/workflows/advanced-concepts/early-stopping/early-stop-parallel"
                },
                {
                  "title": "Prompt Injection Guardrail",
                  "href": "/docs/examples/workflows/advanced-concepts/guardrails/prompt-injection"
                },
                {
                  "title": "Continuous Execution",
                  "href": "/docs/examples/workflows/advanced-concepts/history/continuous-execution"
                },
                {
                  "title": "History In Function",
                  "href": "/docs/examples/workflows/advanced-concepts/history/history-in-function"
                },
                {
                  "title": "Intent Routing With History",
                  "href": "/docs/examples/workflows/advanced-concepts/history/intent-routing-with-history"
                },
                {
                  "title": "Step History",
                  "href": "/docs/examples/workflows/advanced-concepts/history/step-history"
                },
                {
                  "title": "Disruption Catchup",
                  "href": "/docs/examples/workflows/advanced-concepts/long-running/disruption-catchup"
                },
                {
                  "title": "Events Replay",
                  "href": "/docs/examples/workflows/advanced-concepts/long-running/events-replay"
                },
                {
                  "title": "WebSocket Reconnect",
                  "href": "/docs/examples/workflows/advanced-concepts/long-running/websocket-reconnect"
                },
                {
                  "title": "Access Previous Outputs",
                  "href": "/docs/examples/workflows/advanced-concepts/previous-step-outputs/access-previous-outputs"
                },
                {
                  "title": "Cancel Run",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/cancel-run"
                },
                {
                  "title": "Workflow Deep Copy",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/deep-copy"
                },
                {
                  "title": "Event Storage",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/event-storage"
                },
                {
                  "title": "Executor Events",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/executor-events"
                },
                {
                  "title": "Workflow Metrics",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/metrics"
                },
                {
                  "title": "Remote Workflow",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/remote-workflow"
                },
                {
                  "title": "Workflow CLI",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/workflow-cli"
                },
                {
                  "title": "Workflow Serialization",
                  "href": "/docs/examples/workflows/advanced-concepts/run-control/workflow-serialization"
                },
                {
                  "title": "Rename Session",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/rename-session"
                },
                {
                  "title": "State In Condition",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/state-in-condition"
                },
                {
                  "title": "State In Function",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/state-in-function"
                },
                {
                  "title": "State In Router",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/state-in-router"
                },
                {
                  "title": "State With Agent",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/state-with-agent"
                },
                {
                  "title": "State With Team",
                  "href": "/docs/examples/workflows/advanced-concepts/session-state/state-with-team"
                },
                {
                  "title": "Image Input",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/image-input"
                },
                {
                  "title": "Input Schema",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/input-schema"
                },
                {
                  "title": "Pydantic Input",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/pydantic-input"
                },
                {
                  "title": "Structured IO Agent",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/structured-io-agent"
                },
                {
                  "title": "Structured IO Function",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/structured-io-function"
                },
                {
                  "title": "Structured IO Team",
                  "href": "/docs/examples/workflows/advanced-concepts/structured-io/structured-io-team"
                },
                {
                  "title": "Workflow Tools",
                  "href": "/docs/examples/workflows/advanced-concepts/tools/workflow-tools"
                },
                {
                  "title": "Basic Workflow Agent",
                  "href": "/docs/examples/workflows/advanced-concepts/workflow-agent/basic-workflow-agent"
                },
                {
                  "title": "Workflow Agent With Condition",
                  "href": "/docs/examples/workflows/advanced-concepts/workflow-agent/workflow-agent-with-condition"
                },
                {
                  "title": "Overview",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/overview"
                },
                {
                  "title": "Nested Workflow",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow"
                },
                {
                  "title": "Auto-Wrap",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow-auto-wrap"
                },
                {
                  "title": "Event Inspection",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow-events"
                },
                {
                  "title": "Nested Workflow with Condition",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow-with-condition"
                },
                {
                  "title": "Nested Workflow with Loop",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow-with-loop"
                },
                {
                  "title": "Nested Workflow with Router",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/nested-workflow-with-router"
                },
                {
                  "title": "Deeply Nested Workflow (3 Levels)",
                  "href": "/docs/examples/workflows/advanced-concepts/nested-workflows/deeply-nested-workflow"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Context",
      "items": [
        {
          "title": "Storage",
          "href": "/docs/examples/storage/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/storage/overview"
            },
            {
              "title": "DynamoDB",
              "href": "/docs/examples/storage/dynamodb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/dynamodb/overview"
                },
                {
                  "title": "Use DynamoDb as the database for an agent.",
                  "href": "/docs/examples/storage/dynamodb/dynamo-for-agent"
                },
                {
                  "title": "Use DynamoDb as the database for a team.",
                  "href": "/docs/examples/storage/dynamodb/dynamo-for-team"
                }
              ]
            },
            {
              "title": "Examples",
              "href": "/docs/examples/storage/examples/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/examples/overview"
                },
                {
                  "title": "Multi-User Multi-Session",
                  "href": "/docs/examples/storage/examples/multi-user-multi-session"
                },
                {
                  "title": "Use SQLite as the database for an Agent, selecting custom names for the tables.",
                  "href": "/docs/examples/storage/examples/selecting-tables"
                }
              ]
            },
            {
              "title": "Firestore",
              "href": "/docs/examples/storage/firestore/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/firestore/overview"
                },
                {
                  "title": "This recipe shows how to store agent sessions in a Firestore database.",
                  "href": "/docs/examples/storage/firestore/firestore-for-agent"
                }
              ]
            },
            {
              "title": "GCS",
              "href": "/docs/examples/storage/gcs/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/gcs/overview"
                },
                {
                  "title": "GCS JSON Storage for Agent",
                  "href": "/docs/examples/storage/gcs/gcs-json-for-agent"
                }
              ]
            },
            {
              "title": "In-Memory",
              "href": "/docs/examples/storage/in-memory/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/in-memory/overview"
                },
                {
                  "title": "In Memory Storage For Agent",
                  "href": "/docs/examples/storage/in-memory/in-memory-storage-for-agent"
                },
                {
                  "title": "In Memory Storage For Team",
                  "href": "/docs/examples/storage/in-memory/in-memory-storage-for-team"
                },
                {
                  "title": "Use JSON files as the database for a Workflow.",
                  "href": "/docs/examples/storage/in-memory/in-memory-storage-for-workflow"
                }
              ]
            },
            {
              "title": "JSON",
              "href": "/docs/examples/storage/json-db/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/json-db/overview"
                },
                {
                  "title": "Use JSON files as the database for an Agent.",
                  "href": "/docs/examples/storage/json-db/json-for-agent"
                },
                {
                  "title": "Use JSON files as the database for a Team.",
                  "href": "/docs/examples/storage/json-db/json-for-team"
                },
                {
                  "title": "Use JSON files as the database for a Workflow.",
                  "href": "/docs/examples/storage/json-db/json-for-workflows"
                }
              ]
            },
            {
              "title": "MongoDB",
              "href": "/docs/examples/storage/mongo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/mongo/overview"
                },
                {
                  "title": "MongoDb for Agent.",
                  "href": "/docs/examples/storage/mongo/mongodb-for-agent"
                },
                {
                  "title": "MongoDb for team.",
                  "href": "/docs/examples/storage/mongo/mongodb-for-team"
                }
              ]
            },
            {
              "title": "Async MongoDB",
              "href": "/docs/examples/storage/mongo/async-mongo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/mongo/async-mongo/overview"
                },
                {
                  "title": "Use AsyncMongoDb as the database for an agent.",
                  "href": "/docs/examples/storage/mongo/async-mongo/async-mongodb-for-agent"
                },
                {
                  "title": "Use AsyncMongoDb as the database for a team.",
                  "href": "/docs/examples/storage/mongo/async-mongo/async-mongodb-for-team"
                },
                {
                  "title": "Use AsyncMongoDb as the database for a workflow.",
                  "href": "/docs/examples/storage/mongo/async-mongo/async-mongodb-for-workflow"
                }
              ]
            },
            {
              "title": "MySQL",
              "href": "/docs/examples/storage/mysql/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/mysql/overview"
                },
                {
                  "title": "Use MySQL as the database for an agent.",
                  "href": "/docs/examples/storage/mysql/mysql-for-agent"
                },
                {
                  "title": "Use MySQL as the database for a team.",
                  "href": "/docs/examples/storage/mysql/mysql-for-team"
                }
              ]
            },
            {
              "title": "PostgreSQL",
              "href": "/docs/examples/storage/postgres/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/postgres/overview"
                },
                {
                  "title": "Use Postgres as the database for an agent.",
                  "href": "/docs/examples/storage/postgres/postgres-for-agent"
                },
                {
                  "title": "Postgres For Team",
                  "href": "/docs/examples/storage/postgres/postgres-for-team"
                },
                {
                  "title": "Postgres Storage for Workflow",
                  "href": "/docs/examples/storage/postgres/postgres-for-workflow"
                }
              ]
            },
            {
              "title": "Redis",
              "href": "/docs/examples/storage/redis/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/redis/overview"
                },
                {
                  "title": "Redis For Agent",
                  "href": "/docs/examples/storage/redis/redis-for-agent"
                },
                {
                  "title": "Redis For Team",
                  "href": "/docs/examples/storage/redis/redis-for-team"
                },
                {
                  "title": "Redis Storage for Workflow",
                  "href": "/docs/examples/storage/redis/redis-for-workflow"
                }
              ]
            },
            {
              "title": "SingleStore",
              "href": "/docs/examples/storage/singlestore/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/singlestore/overview"
                },
                {
                  "title": "Use SingleStore as the database for an agent.",
                  "href": "/docs/examples/storage/singlestore/singlestore-for-agent"
                },
                {
                  "title": "Singlestore For Team",
                  "href": "/docs/examples/storage/singlestore/singlestore-for-team"
                }
              ]
            },
            {
              "title": "SQLite",
              "href": "/docs/examples/storage/sqlite/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/sqlite/overview"
                },
                {
                  "title": "Use SQLite as the database for an Agent.",
                  "href": "/docs/examples/storage/sqlite/sqlite-for-agent"
                },
                {
                  "title": "Sqlite For Team",
                  "href": "/docs/examples/storage/sqlite/sqlite-for-team"
                },
                {
                  "title": "SQLite Storage for Workflow",
                  "href": "/docs/examples/storage/sqlite/sqlite-for-workflow"
                }
              ]
            },
            {
              "title": "SurrealDB",
              "href": "/docs/examples/storage/surrealdb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/storage/surrealdb/overview"
                },
                {
                  "title": "Run SurrealDB in a container before running this script",
                  "href": "/docs/examples/storage/surrealdb/surrealdb-for-agent"
                },
                {
                  "title": "Run SurrealDB in a container before running this script",
                  "href": "/docs/examples/storage/surrealdb/surrealdb-for-team"
                },
                {
                  "title": "Run SurrealDB in a container before running this script",
                  "href": "/docs/examples/storage/surrealdb/surrealdb-for-workflow"
                }
              ]
            }
          ]
        },
        {
          "title": "Knowledge",
          "href": "/docs/examples/knowledge/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/knowledge/overview"
            },
            {
              "title": "Chunking",
              "href": "/docs/examples/knowledge/chunking/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/chunking/overview"
                },
                {
                  "title": "Agentic Chunking",
                  "href": "/docs/examples/knowledge/chunking/agentic-chunking"
                },
                {
                  "title": "Code Chunking",
                  "href": "/docs/examples/knowledge/chunking/code-chunking"
                },
                {
                  "title": "Code Chunking Custom Tokenizer",
                  "href": "/docs/examples/knowledge/chunking/code-chunking-custom-tokenizer"
                },
                {
                  "title": "Csv Row Chunking",
                  "href": "/docs/examples/knowledge/chunking/csv-row-chunking"
                },
                {
                  "title": "Custom Strategy Example",
                  "href": "/docs/examples/knowledge/chunking/custom-strategy-example"
                },
                {
                  "title": "Document Chunking",
                  "href": "/docs/examples/knowledge/chunking/document-chunking"
                },
                {
                  "title": "Fixed Size Chunking",
                  "href": "/docs/examples/knowledge/chunking/fixed-size-chunking"
                },
                {
                  "title": "Markdown Chunking Examples",
                  "href": "/docs/examples/knowledge/chunking/markdown-chunking"
                },
                {
                  "title": "Recursive Chunking",
                  "href": "/docs/examples/knowledge/chunking/recursive-chunking"
                },
                {
                  "title": "Semantic Chunking",
                  "href": "/docs/examples/knowledge/chunking/semantic-chunking"
                },
                {
                  "title": "Semantic Chunking Kern Embedder",
                  "href": "/docs/examples/knowledge/chunking/semantic-chunking-kern-embedder"
                },
                {
                  "title": "Semantic Chunking Chonkie Embedder",
                  "href": "/docs/examples/knowledge/chunking/semantic-chunking-chonkie-embedder"
                }
              ]
            },
            {
              "title": "Cloud",
              "href": "/docs/examples/knowledge/cloud/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/cloud/overview"
                },
                {
                  "title": "Azure Blob Storage Content Source for Knowledge",
                  "href": "/docs/examples/knowledge/cloud/azure-blob"
                },
                {
                  "title": "Content Sources for Knowledge",
                  "href": "/docs/examples/knowledge/cloud/cloud-agentos"
                },
                {
                  "title": "GitHub Content Source for Knowledge",
                  "href": "/docs/examples/knowledge/cloud/github"
                },
                {
                  "title": "SharePoint Content Source for Knowledge",
                  "href": "/docs/examples/knowledge/cloud/sharepoint"
                }
              ]
            },
            {
              "title": "Custom Retriever",
              "href": "/docs/examples/knowledge/custom-retriever/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/custom-retriever/overview"
                },
                {
                  "title": "Async Retriever",
                  "href": "/docs/examples/knowledge/custom-retriever/async-retriever"
                },
                {
                  "title": "Retriever",
                  "href": "/docs/examples/knowledge/custom-retriever/retriever"
                },
                {
                  "title": "Retriever With Dependencies",
                  "href": "/docs/examples/knowledge/custom-retriever/retriever-with-dependencies"
                }
              ]
            },
            {
              "title": "Embedders",
              "href": "/docs/examples/knowledge/embedders/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/embedders/overview"
                },
                {
                  "title": "AWS Bedrock Embedder",
                  "href": "/docs/examples/knowledge/embedders/aws-bedrock-embedder"
                },
                {
                  "title": "AWS Bedrock Embedder v4",
                  "href": "/docs/examples/knowledge/embedders/aws-bedrock-embedder-v4"
                },
                {
                  "title": "Azure OpenAI Embedder",
                  "href": "/docs/examples/knowledge/embedders/azure-embedder"
                },
                {
                  "title": "Cohere Embedder",
                  "href": "/docs/examples/knowledge/embedders/cohere-embedder"
                },
                {
                  "title": "Fireworks Embedder",
                  "href": "/docs/examples/knowledge/embedders/fireworks-embedder"
                },
                {
                  "title": "Gemini Embedder",
                  "href": "/docs/examples/knowledge/embedders/gemini-embedder"
                },
                {
                  "title": "Hugging Face Embedder",
                  "href": "/docs/examples/knowledge/embedders/huggingface-embedder"
                },
                {
                  "title": "Jina Embedder",
                  "href": "/docs/examples/knowledge/embedders/jina-embedder"
                },
                {
                  "title": "LangDB Embedder",
                  "href": "/docs/examples/knowledge/embedders/langdb-embedder"
                },
                {
                  "title": "Mistral Embedder",
                  "href": "/docs/examples/knowledge/embedders/mistral-embedder"
                },
                {
                  "title": "Nebius Embedder",
                  "href": "/docs/examples/knowledge/embedders/nebius-embedder"
                },
                {
                  "title": "Ollama Embedder",
                  "href": "/docs/examples/knowledge/embedders/ollama-embedder"
                },
                {
                  "title": "OpenAI Embedder",
                  "href": "/docs/examples/knowledge/embedders/openai-embedder"
                },
                {
                  "title": "FastEmbed Embedder",
                  "href": "/docs/examples/knowledge/embedders/qdrant-fastembed"
                },
                {
                  "title": "Sentence Transformer Embedder",
                  "href": "/docs/examples/knowledge/embedders/sentence-transformer-embedder"
                },
                {
                  "title": "Together Embedder",
                  "href": "/docs/examples/knowledge/embedders/together-embedder"
                },
                {
                  "title": "vLLM Local Embedder",
                  "href": "/docs/examples/knowledge/embedders/vllm-embedder-local"
                },
                {
                  "title": "vLLM Remote Embedder",
                  "href": "/docs/examples/knowledge/embedders/vllm-embedder-remote"
                },
                {
                  "title": "VoyageAI Embedder",
                  "href": "/docs/examples/knowledge/embedders/voyageai-embedder"
                }
              ]
            },
            {
              "title": "Filters",
              "href": "/docs/examples/knowledge/filters/vector-dbs/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/overview"
                },
                {
                  "title": "Agentic Filtering",
                  "href": "/docs/examples/knowledge/filters/agentic-filtering"
                },
                {
                  "title": "Agentic Filtering With Output Schema",
                  "href": "/docs/examples/knowledge/filters/agentic-filtering-with-output-schema"
                },
                {
                  "title": "Async Agentic Filtering",
                  "href": "/docs/examples/knowledge/filters/async-agentic-filtering"
                },
                {
                  "title": "Async Filtering",
                  "href": "/docs/examples/knowledge/filters/async-filtering"
                },
                {
                  "title": "Filtering",
                  "href": "/docs/examples/knowledge/filters/filtering"
                },
                {
                  "title": "Filtering On Load",
                  "href": "/docs/examples/knowledge/filters/filtering-on-load"
                },
                {
                  "title": "Filtering With Conditions On Agent",
                  "href": "/docs/examples/knowledge/filters/filtering-with-conditions-on-agent"
                },
                {
                  "title": "Filtering With Conditions On Team",
                  "href": "/docs/examples/knowledge/filters/filtering-with-conditions-on-team"
                },
                {
                  "title": "Filtering With Invalid Keys",
                  "href": "/docs/examples/knowledge/filters/filtering-with-invalid-keys"
                },
                {
                  "title": "Filtering Chroma Db",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-chroma-db"
                },
                {
                  "title": "Filtering Lance Db",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-lance-db"
                },
                {
                  "title": "Filtering Milvus",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-milvus"
                },
                {
                  "title": "Filtering Mongo Db",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-mongo-db"
                },
                {
                  "title": "Filtering Pgvector",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-pgvector"
                },
                {
                  "title": "Filtering Pinecone",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-pinecone"
                },
                {
                  "title": "Filtering Qdrant Db",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-qdrant-db"
                },
                {
                  "title": "Filtering Surrealdb",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-surrealdb"
                },
                {
                  "title": "Filtering Weaviate",
                  "href": "/docs/examples/knowledge/filters/vector-dbs/filtering-weaviate"
                }
              ]
            },
            {
              "title": "Os",
              "href": "/docs/examples/knowledge/os/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/os/overview"
                },
                {
                  "title": "Multiple Knowledge Instances in AgentOS",
                  "href": "/docs/examples/knowledge/os/multiple-knowledge-instances"
                }
              ]
            },
            {
              "title": "Protocol",
              "href": "/docs/examples/knowledge/protocol/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/protocol/overview"
                },
                {
                  "title": "FileSystemKnowledge Example",
                  "href": "/docs/examples/knowledge/protocol/file-system"
                }
              ]
            },
            {
              "title": "Getting Started",
              "href": "/docs/examples/knowledge/quickstart/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/quickstart/overview"
                },
                {
                  "title": "Batching",
                  "href": "/docs/examples/knowledge/quickstart/batching"
                },
                {
                  "title": "From GCS",
                  "href": "/docs/examples/knowledge/quickstart/from-gcs"
                },
                {
                  "title": "From Multiple Sources",
                  "href": "/docs/examples/knowledge/quickstart/from-multiple"
                },
                {
                  "title": "From Path",
                  "href": "/docs/examples/knowledge/quickstart/from-path"
                },
                {
                  "title": "From S3",
                  "href": "/docs/examples/knowledge/quickstart/from-s3"
                },
                {
                  "title": "From Topic",
                  "href": "/docs/examples/knowledge/quickstart/from-topic"
                },
                {
                  "title": "From URL",
                  "href": "/docs/examples/knowledge/quickstart/from-url"
                },
                {
                  "title": "From YouTube",
                  "href": "/docs/examples/knowledge/quickstart/from-youtube"
                },
                {
                  "title": "Include And Exclude Files",
                  "href": "/docs/examples/knowledge/quickstart/include-exclude-files"
                },
                {
                  "title": "Isolate Vector Search",
                  "href": "/docs/examples/knowledge/quickstart/isolate-vector-search"
                },
                {
                  "title": "Knowledge Instructions",
                  "href": "/docs/examples/knowledge/quickstart/knowledge-instructions"
                },
                {
                  "title": "Remove Content",
                  "href": "/docs/examples/knowledge/quickstart/remove-content"
                },
                {
                  "title": "Remove Vectors",
                  "href": "/docs/examples/knowledge/quickstart/remove-vectors"
                },
                {
                  "title": "Skip If Exists",
                  "href": "/docs/examples/knowledge/quickstart/skip-if-exists"
                },
                {
                  "title": "Skip If Exists With Contents DB",
                  "href": "/docs/examples/knowledge/quickstart/skip-if-exists-contentsdb"
                },
                {
                  "title": "Specify Reader",
                  "href": "/docs/examples/knowledge/quickstart/specify-reader"
                },
                {
                  "title": "Text Content",
                  "href": "/docs/examples/knowledge/quickstart/text-content"
                }
              ]
            },
            {
              "title": "Readers",
              "href": "/docs/examples/knowledge/readers/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/readers/overview"
                },
                {
                  "title": "Arxiv Reader",
                  "href": "/docs/examples/knowledge/readers/arxiv-reader"
                },
                {
                  "title": "Arxiv Reader Async",
                  "href": "/docs/examples/knowledge/readers/arxiv-reader-async"
                },
                {
                  "title": "Field Labeled CSV Reader",
                  "href": "/docs/examples/knowledge/readers/csv-field-labeled-reader"
                },
                {
                  "title": "Csv Reader",
                  "href": "/docs/examples/knowledge/readers/csv-reader"
                },
                {
                  "title": "Csv Reader Async",
                  "href": "/docs/examples/knowledge/readers/csv-reader-async"
                },
                {
                  "title": "Csv Reader Custom Encodings",
                  "href": "/docs/examples/knowledge/readers/csv-reader-custom-encodings"
                },
                {
                  "title": "Csv Reader Url Async",
                  "href": "/docs/examples/knowledge/readers/csv-reader-url-async"
                },
                {
                  "title": "Doc Kb Async",
                  "href": "/docs/examples/knowledge/readers/doc-kb-async"
                },
                {
                  "title": "Docling Reader",
                  "href": "/docs/examples/knowledge/readers/docling-reader"
                },
                {
                  "title": "Docling Reader Async",
                  "href": "/docs/examples/knowledge/readers/docling-reader-async"
                },
                {
                  "title": "Docling Multiple Formats",
                  "href": "/docs/examples/knowledge/readers/docling-multi-formats"
                },
                {
                  "title": "Docling Reader URL",
                  "href": "/docs/examples/knowledge/readers/docling-reader-url"
                },
                {
                  "title": "Excel Legacy Xls",
                  "href": "/docs/examples/knowledge/readers/excel-legacy-xls"
                },
                {
                  "title": "Excel Reader",
                  "href": "/docs/examples/knowledge/readers/excel-reader"
                },
                {
                  "title": "Firecrawl Reader",
                  "href": "/docs/examples/knowledge/readers/firecrawl-reader"
                },
                {
                  "title": "Json Reader",
                  "href": "/docs/examples/knowledge/readers/json-reader"
                },
                {
                  "title": "Markdown Reader Async",
                  "href": "/docs/examples/knowledge/readers/markdown-reader-async"
                },
                {
                  "title": "Md Reader Async",
                  "href": "/docs/examples/knowledge/readers/md-reader-async"
                },
                {
                  "title": "Pdf Reader Async",
                  "href": "/docs/examples/knowledge/readers/pdf-reader-async"
                },
                {
                  "title": "Pdf Reader Password",
                  "href": "/docs/examples/knowledge/readers/pdf-reader-password"
                },
                {
                  "title": "Pdf Reader Url Password",
                  "href": "/docs/examples/knowledge/readers/pdf-reader-url-password"
                },
                {
                  "title": "Pptx Reader",
                  "href": "/docs/examples/knowledge/readers/pptx-reader"
                },
                {
                  "title": "Pptx Reader Async",
                  "href": "/docs/examples/knowledge/readers/pptx-reader-async"
                },
                {
                  "title": "Tavily Reader",
                  "href": "/docs/examples/knowledge/readers/tavily-reader"
                },
                {
                  "title": "Tavily Reader Async",
                  "href": "/docs/examples/knowledge/readers/tavily-reader-async"
                },
                {
                  "title": "Web Reader",
                  "href": "/docs/examples/knowledge/readers/web-reader"
                },
                {
                  "title": "Web Search Reader",
                  "href": "/docs/examples/knowledge/readers/web-search-reader"
                },
                {
                  "title": "Web Search Reader Async",
                  "href": "/docs/examples/knowledge/readers/web-search-reader-async"
                },
                {
                  "title": "Website Reader",
                  "href": "/docs/examples/knowledge/readers/website-reader"
                }
              ]
            },
            {
              "title": "Search Types",
              "href": "/docs/examples/knowledge/search-type/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/search-type/overview"
                },
                {
                  "title": "Hybrid Search",
                  "href": "/docs/examples/knowledge/search-type/hybrid-search"
                },
                {
                  "title": "Keyword Search",
                  "href": "/docs/examples/knowledge/search-type/keyword-search"
                },
                {
                  "title": "Vector Search",
                  "href": "/docs/examples/knowledge/search-type/vector-search"
                }
              ]
            },
            {
              "title": "Vector Databases",
              "href": "/docs/examples/knowledge/vector-db/weaviate-db/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/knowledge/vector-db/weaviate-db/overview"
                },
                {
                  "title": "Cassandra Database",
                  "href": "/docs/examples/knowledge/vector-db/cassandra-db/cassandra-db"
                },
                {
                  "title": "Chroma Database",
                  "href": "/docs/examples/knowledge/vector-db/chroma-db/chroma-db"
                },
                {
                  "title": "ChromaDB with Hybrid Search using Reciprocal Rank Fusion (RRF)",
                  "href": "/docs/examples/knowledge/vector-db/chroma-db/chroma-db-hybrid-search"
                },
                {
                  "title": "ClickHouse Database",
                  "href": "/docs/examples/knowledge/vector-db/clickhouse-db/clickhouse"
                },
                {
                  "title": "Couchbase Vector DB Example",
                  "href": "/docs/examples/knowledge/vector-db/couchbase-db/couchbase-db"
                },
                {
                  "title": "LanceDB Database",
                  "href": "/docs/examples/knowledge/vector-db/lance-db/lance-db"
                },
                {
                  "title": "LanceDB Cloud connection test.",
                  "href": "/docs/examples/knowledge/vector-db/lance-db/lance-db-cloud"
                },
                {
                  "title": "LanceDB Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/lance-db/lance-db-hybrid-search"
                },
                {
                  "title": "LanceDB With Mistral Embedder",
                  "href": "/docs/examples/knowledge/vector-db/lance-db/lance-db-with-mistral-embedder"
                },
                {
                  "title": "LangChain Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/langchain/langchain-db"
                },
                {
                  "title": "LightRAG Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/lightrag/lightrag"
                },
                {
                  "title": "LlamaIndex Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/llamaindex-db/llamaindex-db"
                },
                {
                  "title": "Milvus Database",
                  "href": "/docs/examples/knowledge/vector-db/milvus-db/milvus-db"
                },
                {
                  "title": "Milvus Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/milvus-db/milvus-db-hybrid-search"
                },
                {
                  "title": "Milvus Range Search",
                  "href": "/docs/examples/knowledge/vector-db/milvus-db/milvus-db-range-search"
                },
                {
                  "title": "Cosmos MongoDB vCore",
                  "href": "/docs/examples/knowledge/vector-db/mongo-db/cosmos-mongodb-vcore"
                },
                {
                  "title": "MongoDB Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/mongo-db/mongo-db"
                },
                {
                  "title": "MongoDB Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/mongo-db/mongo-db-hybrid-search"
                },
                {
                  "title": "PgVector Database",
                  "href": "/docs/examples/knowledge/vector-db/pgvector/pgvector-db"
                },
                {
                  "title": "PgVector Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/pgvector/pgvector-hybrid-search"
                },
                {
                  "title": "AWS Bedrock Reranker Example with PgVector",
                  "href": "/docs/examples/knowledge/vector-db/pgvector/pgvector-with-bedrock-reranker"
                },
                {
                  "title": "Pinecone Database",
                  "href": "/docs/examples/knowledge/vector-db/pinecone-db/pinecone-db"
                },
                {
                  "title": "Qdrant Database",
                  "href": "/docs/examples/knowledge/vector-db/qdrant-db/qdrant-db"
                },
                {
                  "title": "Qdrant Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/qdrant-db/qdrant-db-hybrid-search"
                },
                {
                  "title": "Redis Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/redis-db/redis-db"
                },
                {
                  "title": "Redis With Cohere Reranker",
                  "href": "/docs/examples/knowledge/vector-db/redis-db/redis-db-with-cohere-reranker"
                },
                {
                  "title": "SingleStore Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/singlestore-db/singlestore-db"
                },
                {
                  "title": "SurrealDB Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/surrealdb/surreal-db"
                },
                {
                  "title": "Upstash Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/upstash-db/upstash-db"
                },
                {
                  "title": "Weaviate Vector DB",
                  "href": "/docs/examples/knowledge/vector-db/weaviate-db/weaviate-db"
                },
                {
                  "title": "Weaviate Hybrid Search",
                  "href": "/docs/examples/knowledge/vector-db/weaviate-db/weaviate-db-hybrid-search"
                },
                {
                  "title": "Weaviate Upsert",
                  "href": "/docs/examples/knowledge/vector-db/weaviate-db/weaviate-db-upsert"
                }
              ]
            }
          ]
        },
        {
          "title": "Memory",
          "href": "/docs/examples/memory/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/memory/overview"
            },
            {
              "title": "Agent With Persistent Memory",
              "href": "/docs/examples/memory/agent-with-memory"
            },
            {
              "title": "Agentic Memory Management",
              "href": "/docs/examples/memory/agentic-memory"
            },
            {
              "title": "Agents Sharing Memory",
              "href": "/docs/examples/memory/agents-share-memory"
            },
            {
              "title": "Custom Memory Manager Configuration",
              "href": "/docs/examples/memory/custom-memory-manager"
            },
            {
              "title": "Memory Tools With Web Search",
              "href": "/docs/examples/memory/memory-tools"
            },
            {
              "title": "Multi-User Multi-Session Chat",
              "href": "/docs/examples/memory/multi-user-multi-session-chat"
            },
            {
              "title": "Concurrent Multi-User Multi-Session Chat",
              "href": "/docs/examples/memory/multi-user-multi-session-chat-concurrent"
            },
            {
              "title": "Share Memory and History Between Agents",
              "href": "/docs/examples/memory/share-memory-and-history-between-agents"
            },
            {
              "title": "Memory Manager",
              "href": "/docs/examples/memory/memory-manager/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/memory/memory-manager/overview"
                },
                {
                  "title": "Custom Memory Capture Instructions",
                  "href": "/docs/examples/memory/memory-manager/custom-memory-instructions"
                },
                {
                  "title": "Control Memory Database Tools",
                  "href": "/docs/examples/memory/memory-manager/db-tools-control"
                },
                {
                  "title": "Create Memories From Text and Message History",
                  "href": "/docs/examples/memory/memory-manager/memory-creation"
                },
                {
                  "title": "Search User Memories",
                  "href": "/docs/examples/memory/memory-manager/memory-search"
                },
                {
                  "title": "Standalone Memory Manager CRUD",
                  "href": "/docs/examples/memory/memory-manager/standalone-memory"
                }
              ]
            },
            {
              "title": "Optimize Memories",
              "href": "/docs/examples/memory/optimize-memories/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/memory/optimize-memories/overview"
                },
                {
                  "title": "Custom Memory Optimization Strategy",
                  "href": "/docs/examples/memory/optimize-memories/custom-memory-strategy"
                },
                {
                  "title": "Optimize Memories With Summarize Strategy",
                  "href": "/docs/examples/memory/optimize-memories/memory-summarize-strategy"
                }
              ]
            }
          ]
        },
        {
          "title": "Learning",
          "href": "/docs/examples/learning/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/learning/overview"
            },
            {
              "title": "Basics",
              "href": "/docs/examples/learning/basics/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/basics/overview"
                },
                {
                  "title": "Entity Memory: Always Mode",
                  "href": "/docs/examples/learning/basics/a-entity-memory-always"
                },
                {
                  "title": "Session Context: Summary Mode",
                  "href": "/docs/examples/learning/basics/a-session-context-summary"
                },
                {
                  "title": "User Memory: Always Mode",
                  "href": "/docs/examples/learning/basics/a-user-memory-always"
                },
                {
                  "title": "User Profile: Always Mode",
                  "href": "/docs/examples/learning/basics/a-user-profile-always"
                },
                {
                  "title": "Entity Memory: Agentic Mode",
                  "href": "/docs/examples/learning/basics/b-entity-memory-agentic"
                },
                {
                  "title": "Session Context: Planning Mode",
                  "href": "/docs/examples/learning/basics/b-session-context-planning"
                },
                {
                  "title": "User Memory: Agentic Mode",
                  "href": "/docs/examples/learning/basics/b-user-memory-agentic"
                },
                {
                  "title": "User Profile: Agentic Mode",
                  "href": "/docs/examples/learning/basics/b-user-profile-agentic"
                },
                {
                  "title": "Learned Knowledge: Agentic Mode",
                  "href": "/docs/examples/learning/basics/learned-knowledge"
                }
              ]
            },
            {
              "title": "Custom Stores",
              "href": "/docs/examples/learning/custom-stores/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/custom-stores/overview"
                },
                {
                  "title": "Custom Store: Database-Backed Example",
                  "href": "/docs/examples/learning/custom-stores/custom-store-with-db"
                },
                {
                  "title": "Custom Store: Minimal Example",
                  "href": "/docs/examples/learning/custom-stores/minimal-custom-store"
                }
              ]
            },
            {
              "title": "Decision Logs",
              "href": "/docs/examples/learning/decision-logs/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/decision-logs/overview"
                },
                {
                  "title": "Decision Logs: Basic Usage",
                  "href": "/docs/examples/learning/decision-logs/basic-decision-log"
                },
                {
                  "title": "Decision Logs: ALWAYS Mode (Automatic Logging)",
                  "href": "/docs/examples/learning/decision-logs/decision-log-always"
                }
              ]
            },
            {
              "title": "Entity Memory",
              "href": "/docs/examples/learning/entity-memory/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/entity-memory/overview"
                },
                {
                  "title": "Entity Memory: Relationships (Deep Dive)",
                  "href": "/docs/examples/learning/entity-memory/entity-relationships"
                },
                {
                  "title": "Entity Memory: Facts and Events (Deep Dive)",
                  "href": "/docs/examples/learning/entity-memory/facts-and-events"
                }
              ]
            },
            {
              "title": "Learned Knowledge",
              "href": "/docs/examples/learning/learned-knowledge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/learned-knowledge/overview"
                },
                {
                  "title": "Learned Knowledge: Agentic Mode (Deep Dive)",
                  "href": "/docs/examples/learning/learned-knowledge/agentic-mode"
                },
                {
                  "title": "Learned Knowledge: Propose Mode (Deep Dive)",
                  "href": "/docs/examples/learning/learned-knowledge/propose-mode"
                }
              ]
            },
            {
              "title": "Patterns",
              "href": "/docs/examples/learning/patterns/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/patterns/overview"
                },
                {
                  "title": "Pattern: Personal Assistant with Learning",
                  "href": "/docs/examples/learning/patterns/personal-assistant"
                },
                {
                  "title": "Pattern: Support Agent with Learning",
                  "href": "/docs/examples/learning/patterns/support-agent"
                }
              ]
            },
            {
              "title": "Quick Tests",
              "href": "/docs/examples/learning/quick-tests/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/quick-tests/overview"
                },
                {
                  "title": "Async User Profile Test",
                  "href": "/docs/examples/learning/quick-tests/async-user-profile"
                },
                {
                  "title": "Claude Model Test",
                  "href": "/docs/examples/learning/quick-tests/claude-model"
                },
                {
                  "title": "Learning=True Shorthand Test",
                  "href": "/docs/examples/learning/quick-tests/learning-true-shorthand"
                },
                {
                  "title": "No-DB Graceful Handling Test",
                  "href": "/docs/examples/learning/quick-tests/no-db-graceful"
                }
              ]
            },
            {
              "title": "Quickstart",
              "href": "/docs/examples/learning/quickstart/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/quickstart/overview"
                },
                {
                  "title": "Learning Machines: Agentic Mode",
                  "href": "/docs/examples/learning/quickstart/agentic-learn"
                },
                {
                  "title": "Learning Machines",
                  "href": "/docs/examples/learning/quickstart/always-learn"
                },
                {
                  "title": "Learning Machines: Learned Knowledge",
                  "href": "/docs/examples/learning/quickstart/learned-knowledge"
                }
              ]
            },
            {
              "title": "Session Context",
              "href": "/docs/examples/learning/session-context/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/session-context/overview"
                },
                {
                  "title": "Session Context: Planning Mode (Deep Dive)",
                  "href": "/docs/examples/learning/session-context/planning-mode"
                },
                {
                  "title": "Session Context: Summary Mode (Deep Dive)",
                  "href": "/docs/examples/learning/session-context/summary-mode"
                }
              ]
            },
            {
              "title": "User Profile",
              "href": "/docs/examples/learning/user-profile/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/learning/user-profile/overview"
                },
                {
                  "title": "User Profile: Agentic Mode (Deep Dive)",
                  "href": "/docs/examples/learning/user-profile/agentic-mode"
                },
                {
                  "title": "User Profile: Always Extraction (Deep Dive)",
                  "href": "/docs/examples/learning/user-profile/always-extraction"
                },
                {
                  "title": "User Profile: Custom Schema",
                  "href": "/docs/examples/learning/user-profile/custom-schema"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Models",
      "items": [
        {
          "title": "Overview",
          "href": "/docs/examples/models/overview"
        },
        {
          "title": "OpenAI",
          "href": "/docs/examples/models/openai/responses/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/models/openai/responses/overview"
            },
            {
              "title": "Test script to verify memory events are working correctly.",
              "href": "/docs/examples/models/openai/chat/access-memories-in-memory-completed-event"
            },
            {
              "title": "Openai Agent Flex Tier",
              "href": "/docs/examples/models/openai/chat/agent-flex-tier"
            },
            {
              "title": "Openai Audio Input Agent",
              "href": "/docs/examples/models/openai/chat/audio-input-agent"
            },
            {
              "title": "Openai Audio Input And Output Multi Turn",
              "href": "/docs/examples/models/openai/chat/audio-input-and-output-multi-turn"
            },
            {
              "title": "Openai Audio Input Local File Upload",
              "href": "/docs/examples/models/openai/chat/audio-input-local-file-upload"
            },
            {
              "title": "Openai Audio Output Agent",
              "href": "/docs/examples/models/openai/chat/audio-output-agent"
            },
            {
              "title": "Openai Audio Output Stream",
              "href": "/docs/examples/models/openai/chat/audio-output-stream"
            },
            {
              "title": "Openai Basic",
              "href": "/docs/examples/models/openai/chat/basic"
            },
            {
              "title": "Openai Basic Stream Metrics",
              "href": "/docs/examples/models/openai/chat/basic-stream-metrics"
            },
            {
              "title": "Custom Role Map",
              "href": "/docs/examples/models/openai/chat/custom-role-map"
            },
            {
              "title": "Chat Db",
              "href": "/docs/examples/models/openai/chat/db"
            },
            {
              "title": "Openai Generate Images",
              "href": "/docs/examples/models/openai/chat/generate-images"
            },
            {
              "title": "Openai Image Agent",
              "href": "/docs/examples/models/openai/chat/image-agent"
            },
            {
              "title": "Openai Image Agent Bytes",
              "href": "/docs/examples/models/openai/chat/image-agent-bytes"
            },
            {
              "title": "Openai Image Agent With Memory",
              "href": "/docs/examples/models/openai/chat/image-agent-with-memory"
            },
            {
              "title": "Chat Knowledge",
              "href": "/docs/examples/models/openai/chat/knowledge"
            },
            {
              "title": "This recipe shows how to use personalized memories and summaries in an agent.",
              "href": "/docs/examples/models/openai/chat/memory"
            },
            {
              "title": "Openai Metrics",
              "href": "/docs/examples/models/openai/chat/metrics"
            },
            {
              "title": "Chat Pdf Input File Upload",
              "href": "/docs/examples/models/openai/chat/pdf-input-file-upload"
            },
            {
              "title": "Openai Pdf Input Local",
              "href": "/docs/examples/models/openai/chat/pdf-input-local"
            },
            {
              "title": "Openai Pdf Input Url",
              "href": "/docs/examples/models/openai/chat/pdf-input-url"
            },
            {
              "title": "Openai Reasoning O3 Mini",
              "href": "/docs/examples/models/openai/chat/reasoning-o3-mini"
            },
            {
              "title": "Retry",
              "href": "/docs/examples/models/openai/chat/retry"
            },
            {
              "title": "Openai Structured Output",
              "href": "/docs/examples/models/openai/chat/structured-output"
            },
            {
              "title": "Example: Using the OpenAITools Toolkit for Text-to-Speech",
              "href": "/docs/examples/models/openai/chat/text-to-speech-agent"
            },
            {
              "title": "Chat Tool Use",
              "href": "/docs/examples/models/openai/chat/tool-use"
            },
            {
              "title": "Openai Verbosity Control",
              "href": "/docs/examples/models/openai/chat/verbosity-control"
            },
            {
              "title": "Openai With Retries",
              "href": "/docs/examples/models/openai/chat/with-retries"
            },
            {
              "title": "Openai Agent Flex Tier",
              "href": "/docs/examples/models/openai/responses/agent-flex-tier"
            },
            {
              "title": "Openai Basic",
              "href": "/docs/examples/models/openai/responses/basic"
            },
            {
              "title": "Responses Db",
              "href": "/docs/examples/models/openai/responses/db"
            },
            {
              "title": "Openai Deep Research Agent",
              "href": "/docs/examples/models/openai/responses/deep-research-agent"
            },
            {
              "title": "Openai Image Agent",
              "href": "/docs/examples/models/openai/responses/image-agent"
            },
            {
              "title": "Openai Image Agent Bytes",
              "href": "/docs/examples/models/openai/responses/image-agent-bytes"
            },
            {
              "title": "Openai Image Agent With Memory",
              "href": "/docs/examples/models/openai/responses/image-agent-with-memory"
            },
            {
              "title": "Example: Using the OpenAITools Toolkit for Image Generation",
              "href": "/docs/examples/models/openai/responses/image-generation-agent"
            },
            {
              "title": "Responses Knowledge",
              "href": "/docs/examples/models/openai/responses/knowledge"
            },
            {
              "title": "This recipe shows how to use personalized memories and summaries in an agent.",
              "href": "/docs/examples/models/openai/responses/memory"
            },
            {
              "title": "Openai Pdf Input Local",
              "href": "/docs/examples/models/openai/responses/pdf-input-local"
            },
            {
              "title": "Openai Pdf Input Url",
              "href": "/docs/examples/models/openai/responses/pdf-input-url"
            },
            {
              "title": "Openai Reasoning O3 Mini",
              "href": "/docs/examples/models/openai/responses/reasoning-o3-mini"
            },
            {
              "title": "Openai Structured Output",
              "href": "/docs/examples/models/openai/responses/structured-output"
            },
            {
              "title": "Openai Structured Output With Tools",
              "href": "/docs/examples/models/openai/responses/structured-output-with-tools"
            },
            {
              "title": "Responses Tool Use",
              "href": "/docs/examples/models/openai/responses/tool-use"
            },
            {
              "title": "Openai Tool Use Gpt 5",
              "href": "/docs/examples/models/openai/responses/tool-use-gpt-5"
            },
            {
              "title": "Openai Tool Use O3",
              "href": "/docs/examples/models/openai/responses/tool-use-o3"
            },
            {
              "title": "Openai Verbosity Control",
              "href": "/docs/examples/models/openai/responses/verbosity-control"
            },
            {
              "title": "Openai Websearch Builtin Tool",
              "href": "/docs/examples/models/openai/responses/websearch-builtin-tool"
            },
            {
              "title": "Responses Zdr Reasoning Agent",
              "href": "/docs/examples/models/openai/responses/zdr-reasoning-agent"
            }
          ]
        },
        {
          "title": "Anthropic",
          "href": "/docs/examples/models/anthropic/skills/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/models/anthropic/skills/overview"
            },
            {
              "title": "Anthropic Basic",
              "href": "/docs/examples/models/anthropic/basic"
            },
            {
              "title": "Anthropic Basic With Timeout",
              "href": "/docs/examples/models/anthropic/basic-with-timeout"
            },
            {
              "title": "Betas",
              "href": "/docs/examples/models/anthropic/betas"
            },
            {
              "title": "Anthropic Code Execution",
              "href": "/docs/examples/models/anthropic/code-execution"
            },
            {
              "title": "Self-managed Context Management",
              "href": "/docs/examples/models/anthropic/context-management"
            },
            {
              "title": "Anthropic Csv Input",
              "href": "/docs/examples/models/anthropic/csv-input"
            },
            {
              "title": "Anthropic Db",
              "href": "/docs/examples/models/anthropic/db"
            },
            {
              "title": "Anthropic Financial Analyst Thinking",
              "href": "/docs/examples/models/anthropic/financial-analyst-thinking"
            },
            {
              "title": "Anthropic Image Input Bytes",
              "href": "/docs/examples/models/anthropic/image-input-bytes"
            },
            {
              "title": "Anthropic Image Input File Upload",
              "href": "/docs/examples/models/anthropic/image-input-file-upload"
            },
            {
              "title": "Anthropic Image Input Local File",
              "href": "/docs/examples/models/anthropic/image-input-local-file"
            },
            {
              "title": "Anthropic Image Input Url",
              "href": "/docs/examples/models/anthropic/image-input-url"
            },
            {
              "title": "Anthropic Knowledge",
              "href": "/docs/examples/models/anthropic/knowledge"
            },
            {
              "title": "Anthropic Mcp Connector",
              "href": "/docs/examples/models/anthropic/mcp-connector"
            },
            {
              "title": "This recipe shows how to use personalized memories and summaries in an agent.",
              "href": "/docs/examples/models/anthropic/memory"
            },
            {
              "title": "Anthropic Pdf Input Bytes",
              "href": "/docs/examples/models/anthropic/pdf-input-bytes"
            },
            {
              "title": "Anthropic Pdf Input File Upload",
              "href": "/docs/examples/models/anthropic/pdf-input-file-upload"
            },
            {
              "title": "Anthropic Pdf Input Local",
              "href": "/docs/examples/models/anthropic/pdf-input-local"
            },
            {
              "title": "Anthropic Pdf Input Url",
              "href": "/docs/examples/models/anthropic/pdf-input-url"
            },
            {
              "title": "Anthropic Prompt Caching",
              "href": "/docs/examples/models/anthropic/prompt-caching"
            },
            {
              "title": "Anthropic Prompt Caching Extended",
              "href": "/docs/examples/models/anthropic/prompt-caching-extended"
            },
            {
              "title": "Retry",
              "href": "/docs/examples/models/anthropic/retry"
            },
            {
              "title": "Kern Agent with Word Document Skills.",
              "href": "/docs/examples/models/anthropic/skills/agent-with-documents"
            },
            {
              "title": "Kern Agent with Excel Skills.",
              "href": "/docs/examples/models/anthropic/skills/agent-with-excel"
            },
            {
              "title": "Kern Agent with PowerPoint Skills.",
              "href": "/docs/examples/models/anthropic/skills/agent-with-powerpoint"
            },
            {
              "title": "Multi-Skill Agent",
              "href": "/docs/examples/models/anthropic/skills/multi-skill-agent"
            },
            {
              "title": "Anthropic Structured Output",
              "href": "/docs/examples/models/anthropic/structured-output"
            },
            {
              "title": "Structured Output Strict Tools",
              "href": "/docs/examples/models/anthropic/structured-output-strict-tools"
            },
            {
              "title": "Anthropic Thinking",
              "href": "/docs/examples/models/anthropic/thinking"
            },
            {
              "title": "Anthropic Tool Use",
              "href": "/docs/examples/models/anthropic/tool-use"
            },
            {
              "title": "Anthropic Web Fetch",
              "href": "/docs/examples/models/anthropic/web-fetch"
            },
            {
              "title": "Anthropic Web Search",
              "href": "/docs/examples/models/anthropic/web-search"
            }
          ]
        },
        {
          "title": "Google",
          "href": "/docs/examples/models/google/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/models/google/overview"
            },
            {
              "title": "An example of how to use the thinking budget parameter with the Gemini model.",
              "href": "/docs/examples/models/google/gemini/agent-with-thinking-budget"
            },
            {
              "title": "Google Audio Input Bytes Content",
              "href": "/docs/examples/models/google/gemini/audio-input-bytes-content"
            },
            {
              "title": "Google Audio Input File Upload",
              "href": "/docs/examples/models/google/gemini/audio-input-file-upload"
            },
            {
              "title": "Google Audio Input Local File Upload",
              "href": "/docs/examples/models/google/gemini/audio-input-local-file-upload"
            },
            {
              "title": "Google Basic",
              "href": "/docs/examples/models/google/gemini/basic"
            },
            {
              "title": "Gemini Db",
              "href": "/docs/examples/models/google/gemini/db"
            },
            {
              "title": "Example: Analyze files from public HTTPS URLs.",
              "href": "/docs/examples/models/google/gemini/external-url-input"
            },
            {
              "title": "Google File Search Advanced",
              "href": "/docs/examples/models/google/gemini/file-search-advanced"
            },
            {
              "title": "Google File Search Basic",
              "href": "/docs/examples/models/google/gemini/file-search-basic"
            },
            {
              "title": "Google File Search Rag Pipeline",
              "href": "/docs/examples/models/google/gemini/file-search-rag-pipeline"
            },
            {
              "title": "In this example, we upload a text file to Google and then create a cache.",
              "href": "/docs/examples/models/google/gemini/file-upload-with-cache"
            },
            {
              "title": "Example: Analyze files directly from Google Cloud Storage (GCS).",
              "href": "/docs/examples/models/google/gemini/gcs-file-input"
            },
            {
              "title": "Async example using Gemini with tool calls.",
              "href": "/docs/examples/models/google/gemini/gemini-2-to-3"
            },
            {
              "title": "Async example using Gemini with tool calls.",
              "href": "/docs/examples/models/google/gemini/gemini-3-pro"
            },
            {
              "title": "Async example using Gemini with tool calls.",
              "href": "/docs/examples/models/google/gemini/gemini-3-pro-thinking-level"
            },
            {
              "title": "Grounding with Gemini.",
              "href": "/docs/examples/models/google/gemini/grounding"
            },
            {
              "title": "Google Image Editing",
              "href": "/docs/examples/models/google/gemini/image-editing"
            },
            {
              "title": "Google Image Generation",
              "href": "/docs/examples/models/google/gemini/image-generation"
            },
            {
              "title": "Google Image Input",
              "href": "/docs/examples/models/google/gemini/image-input"
            },
            {
              "title": "Google Image Input File Upload",
              "href": "/docs/examples/models/google/gemini/image-input-file-upload"
            },
            {
              "title": "Example: Using the GeminiTools Toolkit for Image Generation",
              "href": "/docs/examples/models/google/gemini/imagen-tool"
            },
            {
              "title": "Example: Using the GeminiTools Toolkit for Image Generation",
              "href": "/docs/examples/models/google/gemini/imagen-tool-advanced"
            },
            {
              "title": "Gemini Knowledge",
              "href": "/docs/examples/models/google/gemini/knowledge"
            },
            {
              "title": "Gemini Pdf Input File Upload",
              "href": "/docs/examples/models/google/gemini/pdf-input-file-upload"
            },
            {
              "title": "Google Pdf Input Local",
              "href": "/docs/examples/models/google/gemini/pdf-input-local"
            },
            {
              "title": "Google Pdf Input Url",
              "href": "/docs/examples/models/google/gemini/pdf-input-url"
            },
            {
              "title": "Retry",
              "href": "/docs/examples/models/google/gemini/retry"
            },
            {
              "title": "Example: Analyze files from AWS S3 using pre-signed URLs.",
              "href": "/docs/examples/models/google/gemini/s3-url-file-input"
            },
            {
              "title": "Google Search with Gemini.",
              "href": "/docs/examples/models/google/gemini/search"
            },
            {
              "title": "Gemini Storage And Memory",
              "href": "/docs/examples/models/google/gemini/storage-and-memory"
            },
            {
              "title": "Google Structured Output",
              "href": "/docs/examples/models/google/gemini/structured-output"
            },
            {
              "title": "Google Text To Speech",
              "href": "/docs/examples/models/google/gemini/text-to-speech"
            },
            {
              "title": "Google Thinking Agent",
              "href": "/docs/examples/models/google/gemini/thinking-agent"
            },
            {
              "title": "Gemini Tool Use",
              "href": "/docs/examples/models/google/gemini/tool-use"
            },
            {
              "title": "Gemini Url Context",
              "href": "/docs/examples/models/google/gemini/url-context"
            },
            {
              "title": "Combine URL context with Google Search for comprehensive web analysis.",
              "href": "/docs/examples/models/google/gemini/url-context-with-search"
            },
            {
              "title": "Vertex AI Search with Gemini.",
              "href": "/docs/examples/models/google/gemini/vertex-ai-search"
            },
            {
              "title": "Gemini Vertexai",
              "href": "/docs/examples/models/google/gemini/vertexai"
            },
            {
              "title": "Google Vertexai With Credentials",
              "href": "/docs/examples/models/google/gemini/vertexai-with-credentials"
            },
            {
              "title": "Google Video Input Bytes Content",
              "href": "/docs/examples/models/google/gemini/video-input-bytes-content"
            },
            {
              "title": "Google Video Input File Upload",
              "href": "/docs/examples/models/google/gemini/video-input-file-upload"
            },
            {
              "title": "Google Video Input Local File Upload",
              "href": "/docs/examples/models/google/gemini/video-input-local-file-upload"
            },
            {
              "title": "Google Video Input Youtube",
              "href": "/docs/examples/models/google/gemini/video-input-youtube"
            }
          ]
        },
        {
          "title": "Open Source",
          "href": "/docs/examples/models/groq/reasoning/overview",
          "items": [
            {
              "title": "Groq",
              "href": "/docs/examples/models/groq/reasoning/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/groq/reasoning/overview"
                },
                {
                  "title": "Groq Agent Team",
                  "href": "/docs/examples/models/groq/agent-team"
                },
                {
                  "title": "Groq Basic",
                  "href": "/docs/examples/models/groq/basic"
                },
                {
                  "title": "Groq Browser Search",
                  "href": "/docs/examples/models/groq/browser-search"
                },
                {
                  "title": "Groq Db",
                  "href": "/docs/examples/models/groq/db"
                },
                {
                  "title": "DeepKnowledge",
                  "href": "/docs/examples/models/groq/deep-knowledge"
                },
                {
                  "title": "Groq Image Agent",
                  "href": "/docs/examples/models/groq/image-agent"
                },
                {
                  "title": "Groq Knowledge",
                  "href": "/docs/examples/models/groq/knowledge"
                },
                {
                  "title": "Groq Metrics",
                  "href": "/docs/examples/models/groq/metrics"
                },
                {
                  "title": "Groq Reasoning Agent",
                  "href": "/docs/examples/models/groq/reasoning-agent"
                },
                {
                  "title": "Groq Basic",
                  "href": "/docs/examples/models/groq/reasoning/basic"
                },
                {
                  "title": "Reasoning Demo Deepseek Qwen",
                  "href": "/docs/examples/models/groq/reasoning/demo-deepseek-qwen"
                },
                {
                  "title": "Reasoning Demo Qwen 2 5 32b",
                  "href": "/docs/examples/models/groq/reasoning/demo-qwen-2-5-32b"
                },
                {
                  "title": "Groq Finance Agent",
                  "href": "/docs/examples/models/groq/reasoning/finance-agent"
                },
                {
                  "title": "Groq Research Agent Exa",
                  "href": "/docs/examples/models/groq/research-agent-exa"
                },
                {
                  "title": "Groq Research Agent Seltz",
                  "href": "/docs/examples/models/groq/research-agent-seltz"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/groq/retry"
                },
                {
                  "title": "Groq Structured Output",
                  "href": "/docs/examples/models/groq/structured-output"
                },
                {
                  "title": "Please install dependencies using:",
                  "href": "/docs/examples/models/groq/tool-use"
                },
                {
                  "title": "Groq Transcription Agent",
                  "href": "/docs/examples/models/groq/transcription-agent"
                },
                {
                  "title": "Groq Translation Agent",
                  "href": "/docs/examples/models/groq/translation-agent"
                }
              ]
            },
            {
              "title": "DeepSeek",
              "href": "/docs/examples/models/deepseek/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/deepseek/overview"
                },
                {
                  "title": "Deepseek Basic",
                  "href": "/docs/examples/models/deepseek/basic"
                },
                {
                  "title": "Deepseek Reasoning Agent",
                  "href": "/docs/examples/models/deepseek/reasoning-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/deepseek/retry"
                },
                {
                  "title": "Deepseek Structured Output",
                  "href": "/docs/examples/models/deepseek/structured-output"
                },
                {
                  "title": "Deepseek Thinking Tool Calls",
                  "href": "/docs/examples/models/deepseek/thinking-tool-calls"
                },
                {
                  "title": "Deepseek Tool Use",
                  "href": "/docs/examples/models/deepseek/tool-use"
                }
              ]
            },
            {
              "title": "Mistral",
              "href": "/docs/examples/models/mistral/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/mistral/overview"
                },
                {
                  "title": "Mistral Basic",
                  "href": "/docs/examples/models/mistral/basic"
                },
                {
                  "title": "Mistral Image Bytes Input Agent",
                  "href": "/docs/examples/models/mistral/image-bytes-input-agent"
                },
                {
                  "title": "Mistral Image Compare Agent",
                  "href": "/docs/examples/models/mistral/image-compare-agent"
                },
                {
                  "title": "Mistral Image File Input Agent",
                  "href": "/docs/examples/models/mistral/image-file-input-agent"
                },
                {
                  "title": "Mistral Image Ocr With Structured Output",
                  "href": "/docs/examples/models/mistral/image-ocr-with-structured-output"
                },
                {
                  "title": "This agent transcribes an old written document from an image.",
                  "href": "/docs/examples/models/mistral/image-transcribe-document-agent"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/mistral/memory"
                },
                {
                  "title": "Mistral Small",
                  "href": "/docs/examples/models/mistral/mistral-small"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/mistral/retry"
                },
                {
                  "title": "Mistral Structured Output",
                  "href": "/docs/examples/models/mistral/structured-output"
                },
                {
                  "title": "Mistral Structured Output With Tool Use",
                  "href": "/docs/examples/models/mistral/structured-output-with-tool-use"
                },
                {
                  "title": "Mistral Tool Use",
                  "href": "/docs/examples/models/mistral/tool-use"
                }
              ]
            },
            {
              "title": "Together",
              "href": "/docs/examples/models/together/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/together/overview"
                },
                {
                  "title": "Together Basic",
                  "href": "/docs/examples/models/together/basic"
                },
                {
                  "title": "Together Image Agent",
                  "href": "/docs/examples/models/together/image-agent"
                },
                {
                  "title": "Together Image Agent Bytes",
                  "href": "/docs/examples/models/together/image-agent-bytes"
                },
                {
                  "title": "Together Image Agent With Memory",
                  "href": "/docs/examples/models/together/image-agent-with-memory"
                },
                {
                  "title": "Together Reasoning Agent",
                  "href": "/docs/examples/models/together/reasoning-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/together/retry"
                },
                {
                  "title": "Together Structured Output",
                  "href": "/docs/examples/models/together/structured-output"
                },
                {
                  "title": "Together Tool Use",
                  "href": "/docs/examples/models/together/tool-use"
                }
              ]
            },
            {
              "title": "Fireworks",
              "href": "/docs/examples/models/fireworks/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/fireworks/overview"
                },
                {
                  "title": "Fireworks Basic",
                  "href": "/docs/examples/models/fireworks/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/fireworks/retry"
                },
                {
                  "title": "Fireworks Structured Output",
                  "href": "/docs/examples/models/fireworks/structured-output"
                },
                {
                  "title": "Fireworks Tool Use",
                  "href": "/docs/examples/models/fireworks/tool-use"
                }
              ]
            },
            {
              "title": "Cohere",
              "href": "/docs/examples/models/cohere/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/cohere/overview"
                },
                {
                  "title": "Cohere Basic",
                  "href": "/docs/examples/models/cohere/basic"
                },
                {
                  "title": "Cohere Db",
                  "href": "/docs/examples/models/cohere/db"
                },
                {
                  "title": "Cohere Image Agent",
                  "href": "/docs/examples/models/cohere/image-agent"
                },
                {
                  "title": "Cohere Image Agent Bytes",
                  "href": "/docs/examples/models/cohere/image-agent-bytes"
                },
                {
                  "title": "Cohere Image Agent Local File",
                  "href": "/docs/examples/models/cohere/image-agent-local-file"
                },
                {
                  "title": "Cohere Knowledge",
                  "href": "/docs/examples/models/cohere/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/cohere/memory"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/cohere/retry"
                },
                {
                  "title": "Cohere Structured Output",
                  "href": "/docs/examples/models/cohere/structured-output"
                },
                {
                  "title": "Cohere Tool Use",
                  "href": "/docs/examples/models/cohere/tool-use"
                }
              ]
            },
            {
              "title": "Meta",
              "href": "/docs/examples/models/meta/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/meta/overview"
                },
                {
                  "title": "Meta Basic",
                  "href": "/docs/examples/models/meta/llama-openai/basic"
                },
                {
                  "title": "Meta Image Input Bytes",
                  "href": "/docs/examples/models/meta/llama-openai/image-input-bytes"
                },
                {
                  "title": "Meta Image Input File",
                  "href": "/docs/examples/models/meta/llama-openai/image-input-file"
                },
                {
                  "title": "Llama Openai Knowledge",
                  "href": "/docs/examples/models/meta/llama-openai/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/meta/llama-openai/memory"
                },
                {
                  "title": "Meta Metrics",
                  "href": "/docs/examples/models/meta/llama-openai/metrics"
                },
                {
                  "title": "Llama Openai Storage",
                  "href": "/docs/examples/models/meta/llama-openai/storage"
                },
                {
                  "title": "Meta Structured Output",
                  "href": "/docs/examples/models/meta/llama-openai/structured-output"
                },
                {
                  "title": "Llama Openai Tool Use",
                  "href": "/docs/examples/models/meta/llama-openai/tool-use"
                },
                {
                  "title": "Llama Async Knowledge",
                  "href": "/docs/examples/models/meta/llama/async-knowledge"
                },
                {
                  "title": "Meta Basic",
                  "href": "/docs/examples/models/meta/llama/basic"
                },
                {
                  "title": "Llama Db",
                  "href": "/docs/examples/models/meta/llama/db"
                },
                {
                  "title": "Meta Image Input Bytes",
                  "href": "/docs/examples/models/meta/llama/image-input-bytes"
                },
                {
                  "title": "Meta Image Input File",
                  "href": "/docs/examples/models/meta/llama/image-input-file"
                },
                {
                  "title": "Llama Knowledge",
                  "href": "/docs/examples/models/meta/llama/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/meta/llama/memory"
                },
                {
                  "title": "Meta Metrics",
                  "href": "/docs/examples/models/meta/llama/metrics"
                },
                {
                  "title": "Meta Structured Output",
                  "href": "/docs/examples/models/meta/llama/structured-output"
                },
                {
                  "title": "Llama Tool Use",
                  "href": "/docs/examples/models/meta/llama/tool-use"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/meta/retry"
                }
              ]
            },
            {
              "title": "Hugging Face",
              "href": "/docs/examples/models/huggingface/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/huggingface/overview"
                },
                {
                  "title": "Huggingface Basic",
                  "href": "/docs/examples/models/huggingface/basic"
                },
                {
                  "title": "Huggingface Llama Essay Writer",
                  "href": "/docs/examples/models/huggingface/llama-essay-writer"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/huggingface/retry"
                },
                {
                  "title": "Huggingface Tool Use",
                  "href": "/docs/examples/models/huggingface/tool-use"
                }
              ]
            }
          ]
        },
        {
          "title": "Enterprise",
          "href": "/docs/examples/models/aws/overview",
          "items": [
            {
              "title": "AWS",
              "href": "/docs/examples/models/aws/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/aws/overview"
                },
                {
                  "title": "Aws Basic",
                  "href": "/docs/examples/models/aws/bedrock/basic"
                },
                {
                  "title": "Aws Image Agent Bytes",
                  "href": "/docs/examples/models/aws/bedrock/image-agent-bytes"
                },
                {
                  "title": "Aws Pdf Agent Bytes",
                  "href": "/docs/examples/models/aws/bedrock/pdf-agent-bytes"
                },
                {
                  "title": "Aws Structured Output",
                  "href": "/docs/examples/models/aws/bedrock/structured-output"
                },
                {
                  "title": "Bedrock Tool Use",
                  "href": "/docs/examples/models/aws/bedrock/tool-use"
                },
                {
                  "title": "Aws Basic",
                  "href": "/docs/examples/models/aws/claude/basic"
                },
                {
                  "title": "Claude Db",
                  "href": "/docs/examples/models/aws/claude/db"
                },
                {
                  "title": "Aws Image Agent",
                  "href": "/docs/examples/models/aws/claude/image-agent"
                },
                {
                  "title": "Claude Knowledge",
                  "href": "/docs/examples/models/aws/claude/knowledge"
                },
                {
                  "title": "Aws Structured Output",
                  "href": "/docs/examples/models/aws/claude/structured-output"
                },
                {
                  "title": "Claude Tool Use",
                  "href": "/docs/examples/models/aws/claude/tool-use"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/aws/retry"
                }
              ]
            },
            {
              "title": "Azure",
              "href": "/docs/examples/models/azure/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/azure/overview"
                },
                {
                  "title": "Azure Basic",
                  "href": "/docs/examples/models/azure/ai-foundry/basic"
                },
                {
                  "title": "Ai Foundry Db",
                  "href": "/docs/examples/models/azure/ai-foundry/db"
                },
                {
                  "title": "Azure Demo Cohere",
                  "href": "/docs/examples/models/azure/ai-foundry/demo-cohere"
                },
                {
                  "title": "Azure Demo Mistral",
                  "href": "/docs/examples/models/azure/ai-foundry/demo-mistral"
                },
                {
                  "title": "Azure Image Agent",
                  "href": "/docs/examples/models/azure/ai-foundry/image-agent"
                },
                {
                  "title": "Azure Image Agent Bytes",
                  "href": "/docs/examples/models/azure/ai-foundry/image-agent-bytes"
                },
                {
                  "title": "Ai Foundry Knowledge",
                  "href": "/docs/examples/models/azure/ai-foundry/knowledge"
                },
                {
                  "title": "Azure Structured Output",
                  "href": "/docs/examples/models/azure/ai-foundry/structured-output"
                },
                {
                  "title": "Ai Foundry Tool Use",
                  "href": "/docs/examples/models/azure/ai-foundry/tool-use"
                },
                {
                  "title": "Azure Basic",
                  "href": "/docs/examples/models/azure/openai/basic"
                },
                {
                  "title": "Openai Db",
                  "href": "/docs/examples/models/azure/openai/db"
                },
                {
                  "title": "Openai Knowledge",
                  "href": "/docs/examples/models/azure/openai/knowledge"
                },
                {
                  "title": "Azure Structured Output",
                  "href": "/docs/examples/models/azure/openai/structured-output"
                },
                {
                  "title": "Openai Tool Use",
                  "href": "/docs/examples/models/azure/openai/tool-use"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/azure/retry"
                }
              ]
            },
            {
              "title": "Vertex AI",
              "href": "/docs/examples/models/vertexai/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/vertexai/overview"
                },
                {
                  "title": "Vertexai Basic",
                  "href": "/docs/examples/models/vertexai/claude/basic"
                },
                {
                  "title": "Vertexai Basic With Timeout",
                  "href": "/docs/examples/models/vertexai/claude/basic-with-timeout"
                },
                {
                  "title": "Betas",
                  "href": "/docs/examples/models/vertexai/claude/betas"
                },
                {
                  "title": "Claude Db",
                  "href": "/docs/examples/models/vertexai/claude/db"
                },
                {
                  "title": "Vertexai Image Input Bytes",
                  "href": "/docs/examples/models/vertexai/claude/image-input-bytes"
                },
                {
                  "title": "Vertexai Image Input Url",
                  "href": "/docs/examples/models/vertexai/claude/image-input-url"
                },
                {
                  "title": "Claude Knowledge",
                  "href": "/docs/examples/models/vertexai/claude/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/vertexai/claude/memory"
                },
                {
                  "title": "Vertexai Pdf Input Bytes",
                  "href": "/docs/examples/models/vertexai/claude/pdf-input-bytes"
                },
                {
                  "title": "Vertexai Pdf Input Local",
                  "href": "/docs/examples/models/vertexai/claude/pdf-input-local"
                },
                {
                  "title": "Claude Prompt Caching",
                  "href": "/docs/examples/models/vertexai/claude/prompt-caching"
                },
                {
                  "title": "Vertexai Structured Output",
                  "href": "/docs/examples/models/vertexai/claude/structured-output"
                },
                {
                  "title": "Vertexai Thinking",
                  "href": "/docs/examples/models/vertexai/claude/thinking"
                },
                {
                  "title": "Claude Tool Use",
                  "href": "/docs/examples/models/vertexai/claude/tool-use"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/vertexai/retry"
                }
              ]
            },
            {
              "title": "IBM",
              "href": "/docs/examples/models/ibm/watsonx/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/ibm/watsonx/overview"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/ibm/retry"
                },
                {
                  "title": "Ibm Basic",
                  "href": "/docs/examples/models/ibm/watsonx/basic"
                },
                {
                  "title": "Watsonx Db",
                  "href": "/docs/examples/models/ibm/watsonx/db"
                },
                {
                  "title": "Ibm Image Agent Bytes",
                  "href": "/docs/examples/models/ibm/watsonx/image-agent-bytes"
                },
                {
                  "title": "Watsonx Knowledge",
                  "href": "/docs/examples/models/ibm/watsonx/knowledge"
                },
                {
                  "title": "Ibm Structured Output",
                  "href": "/docs/examples/models/ibm/watsonx/structured-output"
                },
                {
                  "title": "Watsonx Tool Use",
                  "href": "/docs/examples/models/ibm/watsonx/tool-use"
                }
              ]
            },
            {
              "title": "NVIDIA",
              "href": "/docs/examples/models/nvidia/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/nvidia/overview"
                },
                {
                  "title": "Nvidia Basic",
                  "href": "/docs/examples/models/nvidia/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/nvidia/retry"
                },
                {
                  "title": "Nvidia Tool Use",
                  "href": "/docs/examples/models/nvidia/tool-use"
                }
              ]
            },
            {
              "title": "Cerebras",
              "href": "/docs/examples/models/cerebras/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/cerebras/overview"
                },
                {
                  "title": "Cerebras Basic",
                  "href": "/docs/examples/models/cerebras/basic"
                },
                {
                  "title": "Cerebras Db",
                  "href": "/docs/examples/models/cerebras/db"
                },
                {
                  "title": "Cerebras Knowledge",
                  "href": "/docs/examples/models/cerebras/knowledge"
                },
                {
                  "title": "Cerebras Oss Gpt",
                  "href": "/docs/examples/models/cerebras/oss-gpt"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/cerebras/retry"
                },
                {
                  "title": "Cerebras Structured Output",
                  "href": "/docs/examples/models/cerebras/structured-output"
                },
                {
                  "title": "Cerebras Tool Use",
                  "href": "/docs/examples/models/cerebras/tool-use"
                }
              ]
            },
            {
              "title": "xAI",
              "href": "/docs/examples/models/xai/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/xai/overview"
                },
                {
                  "title": "Xai Basic",
                  "href": "/docs/examples/models/xai/basic"
                },
                {
                  "title": "Finance Agent",
                  "href": "/docs/examples/models/xai/finance-agent"
                },
                {
                  "title": "Xai Image Agent",
                  "href": "/docs/examples/models/xai/image-agent"
                },
                {
                  "title": "Xai Image Agent Bytes",
                  "href": "/docs/examples/models/xai/image-agent-bytes"
                },
                {
                  "title": "Xai Image Agent With Memory",
                  "href": "/docs/examples/models/xai/image-agent-with-memory"
                },
                {
                  "title": "Xai Live Search Agent",
                  "href": "/docs/examples/models/xai/live-search-agent"
                },
                {
                  "title": "Xai Live Search Agent Stream",
                  "href": "/docs/examples/models/xai/live-search-agent-stream"
                },
                {
                  "title": "Xai Reasoning Agent",
                  "href": "/docs/examples/models/xai/reasoning-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/xai/retry"
                },
                {
                  "title": "Xai Structured Output",
                  "href": "/docs/examples/models/xai/structured-output"
                },
                {
                  "title": "Build a Web Search Agent using xAI.",
                  "href": "/docs/examples/models/xai/tool-use"
                }
              ]
            }
          ]
        },
        {
          "title": "Local",
          "href": "/docs/examples/models/ollama/responses/overview",
          "items": [
            {
              "title": "Ollama",
              "href": "/docs/examples/models/ollama/responses/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/ollama/responses/overview"
                },
                {
                  "title": "Ollama Basic",
                  "href": "/docs/examples/models/ollama/chat/basic"
                },
                {
                  "title": "Chat Db",
                  "href": "/docs/examples/models/ollama/chat/db"
                },
                {
                  "title": "Ollama Demo Deepseek R1",
                  "href": "/docs/examples/models/ollama/chat/demo-deepseek-r1"
                },
                {
                  "title": "Ollama Demo Gemma",
                  "href": "/docs/examples/models/ollama/chat/demo-gemma"
                },
                {
                  "title": "Ollama Demo Phi4",
                  "href": "/docs/examples/models/ollama/chat/demo-phi4"
                },
                {
                  "title": "Ollama Demo Qwen",
                  "href": "/docs/examples/models/ollama/chat/demo-qwen"
                },
                {
                  "title": "Ollama Image Agent",
                  "href": "/docs/examples/models/ollama/chat/image-agent"
                },
                {
                  "title": "Chat Knowledge",
                  "href": "/docs/examples/models/ollama/chat/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/ollama/chat/memory"
                },
                {
                  "title": "Chat Ollama Cloud",
                  "href": "/docs/examples/models/ollama/chat/ollama-cloud"
                },
                {
                  "title": "Ollama Reasoning Agent",
                  "href": "/docs/examples/models/ollama/chat/reasoning-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/ollama/chat/retry"
                },
                {
                  "title": "Chat Set Client",
                  "href": "/docs/examples/models/ollama/chat/set-client"
                },
                {
                  "title": "Ollama Set Temperature",
                  "href": "/docs/examples/models/ollama/chat/set-temperature"
                },
                {
                  "title": "Ollama Structured Output",
                  "href": "/docs/examples/models/ollama/chat/structured-output"
                },
                {
                  "title": "Chat Tool Use",
                  "href": "/docs/examples/models/ollama/chat/tool-use"
                },
                {
                  "title": "Basic example using Ollama with the OpenAI Responses API.",
                  "href": "/docs/examples/models/ollama/responses/basic"
                },
                {
                  "title": "Structured output example using Ollama with the OpenAI Responses API.",
                  "href": "/docs/examples/models/ollama/responses/structured-output"
                },
                {
                  "title": "Tool use example using Ollama with the OpenAI Responses API.",
                  "href": "/docs/examples/models/ollama/responses/tool-use"
                }
              ]
            },
            {
              "title": "vLLM",
              "href": "/docs/examples/models/vllm/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/vllm/overview"
                },
                {
                  "title": "Vllm Basic",
                  "href": "/docs/examples/models/vllm/basic"
                },
                {
                  "title": "Code generation example with DeepSeek-Coder.",
                  "href": "/docs/examples/models/vllm/code-generation"
                },
                {
                  "title": "Vllm Db",
                  "href": "/docs/examples/models/vllm/db"
                },
                {
                  "title": "Personalized memory and session summaries with vLLM.",
                  "href": "/docs/examples/models/vllm/memory"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/vllm/retry"
                },
                {
                  "title": "Vllm Structured Output",
                  "href": "/docs/examples/models/vllm/structured-output"
                },
                {
                  "title": "Build a Web Search Agent using xAI.",
                  "href": "/docs/examples/models/vllm/tool-use"
                }
              ]
            },
            {
              "title": "LMStudio",
              "href": "/docs/examples/models/lmstudio/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/lmstudio/overview"
                },
                {
                  "title": "Lmstudio Basic",
                  "href": "/docs/examples/models/lmstudio/basic"
                },
                {
                  "title": "Lmstudio Db",
                  "href": "/docs/examples/models/lmstudio/db"
                },
                {
                  "title": "Lmstudio Image Agent",
                  "href": "/docs/examples/models/lmstudio/image-agent"
                },
                {
                  "title": "Lmstudio Knowledge",
                  "href": "/docs/examples/models/lmstudio/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/lmstudio/memory"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/lmstudio/retry"
                },
                {
                  "title": "Lmstudio Structured Output",
                  "href": "/docs/examples/models/lmstudio/structured-output"
                },
                {
                  "title": "Lmstudio Tool Use",
                  "href": "/docs/examples/models/lmstudio/tool-use"
                }
              ]
            },
            {
              "title": "Llama.cpp",
              "href": "/docs/examples/models/llama-cpp/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/llama-cpp/overview"
                },
                {
                  "title": "Llama Cpp Basic",
                  "href": "/docs/examples/models/llama-cpp/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/llama-cpp/retry"
                },
                {
                  "title": "Llama Cpp Structured Output",
                  "href": "/docs/examples/models/llama-cpp/structured-output"
                },
                {
                  "title": "Llama Cpp Tool Use",
                  "href": "/docs/examples/models/llama-cpp/tool-use"
                }
              ]
            }
          ]
        },
        {
          "title": "More Providers",
          "href": "/docs/examples/models/aimlapi/overview",
          "items": [
            {
              "title": "AIML API",
              "href": "/docs/examples/models/aimlapi/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/aimlapi/overview"
                },
                {
                  "title": "Aimlapi Basic",
                  "href": "/docs/examples/models/aimlapi/basic"
                },
                {
                  "title": "Aimlapi Image Agent",
                  "href": "/docs/examples/models/aimlapi/image-agent"
                },
                {
                  "title": "Aimlapi Image Agent Bytes",
                  "href": "/docs/examples/models/aimlapi/image-agent-bytes"
                },
                {
                  "title": "Aimlapi Image Agent With Memory",
                  "href": "/docs/examples/models/aimlapi/image-agent-with-memory"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/aimlapi/retry"
                },
                {
                  "title": "Aimlapi Structured Output",
                  "href": "/docs/examples/models/aimlapi/structured-output"
                },
                {
                  "title": "Aimlapi Tool Use",
                  "href": "/docs/examples/models/aimlapi/tool-use"
                }
              ]
            },
            {
              "title": "Cerebras (OpenAI)",
              "href": "/docs/examples/models/cerebras-openai/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/cerebras-openai/overview"
                },
                {
                  "title": "Cerebras Openai Basic",
                  "href": "/docs/examples/models/cerebras-openai/basic"
                },
                {
                  "title": "Cerebras Openai Db",
                  "href": "/docs/examples/models/cerebras-openai/db"
                },
                {
                  "title": "Cerebras Openai Knowledge",
                  "href": "/docs/examples/models/cerebras-openai/knowledge"
                },
                {
                  "title": "Cerebras Openai Oss Gpt",
                  "href": "/docs/examples/models/cerebras-openai/oss-gpt"
                },
                {
                  "title": "Cerebras Openai Structured Output",
                  "href": "/docs/examples/models/cerebras-openai/structured-output"
                },
                {
                  "title": "Cerebras Openai Tool Use",
                  "href": "/docs/examples/models/cerebras-openai/tool-use"
                }
              ]
            },
            {
              "title": "Clients",
              "href": "/docs/examples/models/clients/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/clients/overview"
                },
                {
                  "title": "Global HTTP Client Customization (Cookbook)",
                  "href": "/docs/examples/models/clients/http-client-caching"
                }
              ]
            },
            {
              "title": "CometAPI",
              "href": "/docs/examples/models/cometapi/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/cometapi/overview"
                },
                {
                  "title": "Cometapi Basic",
                  "href": "/docs/examples/models/cometapi/basic"
                },
                {
                  "title": "Image analysis example using CometAPI with vision models.",
                  "href": "/docs/examples/models/cometapi/image-agent"
                },
                {
                  "title": "Image analysis with memory example using CometAPI.",
                  "href": "/docs/examples/models/cometapi/image-agent-with-memory"
                },
                {
                  "title": "Example showcasing different models available through CometAPI.",
                  "href": "/docs/examples/models/cometapi/multi-model"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/cometapi/retry"
                },
                {
                  "title": "Cometapi Structured Output",
                  "href": "/docs/examples/models/cometapi/structured-output"
                },
                {
                  "title": "Cometapi Tool Use",
                  "href": "/docs/examples/models/cometapi/tool-use"
                }
              ]
            },
            {
              "title": "DashScope",
              "href": "/docs/examples/models/dashscope/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/dashscope/overview"
                },
                {
                  "title": "Dashscope Basic",
                  "href": "/docs/examples/models/dashscope/basic"
                },
                {
                  "title": "Dashscope Image Agent",
                  "href": "/docs/examples/models/dashscope/image-agent"
                },
                {
                  "title": "Dashscope Image Agent Bytes",
                  "href": "/docs/examples/models/dashscope/image-agent-bytes"
                },
                {
                  "title": "Dashscope Knowledge Tools",
                  "href": "/docs/examples/models/dashscope/knowledge-tools"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/dashscope/retry"
                },
                {
                  "title": "Dashscope Structured Output",
                  "href": "/docs/examples/models/dashscope/structured-output"
                },
                {
                  "title": "Dashscope Thinking Agent",
                  "href": "/docs/examples/models/dashscope/thinking-agent"
                },
                {
                  "title": "Dashscope Tool Use",
                  "href": "/docs/examples/models/dashscope/tool-use"
                }
              ]
            },
            {
              "title": "DeepInfra",
              "href": "/docs/examples/models/deepinfra/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/deepinfra/overview"
                },
                {
                  "title": "Deepinfra Basic",
                  "href": "/docs/examples/models/deepinfra/basic"
                },
                {
                  "title": "Deepinfra Json Output",
                  "href": "/docs/examples/models/deepinfra/json-output"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/deepinfra/retry"
                },
                {
                  "title": "Deepinfra Tool Use",
                  "href": "/docs/examples/models/deepinfra/tool-use"
                }
              ]
            },
            {
              "title": "InternLM",
              "href": "/docs/examples/models/internlm/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/internlm/overview"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/internlm/retry"
                }
              ]
            },
            {
              "title": "LangDB",
              "href": "/docs/examples/models/langdb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/langdb/overview"
                },
                {
                  "title": "Langdb Agent",
                  "href": "/docs/examples/models/langdb/agent"
                },
                {
                  "title": "Langdb Basic",
                  "href": "/docs/examples/models/langdb/basic"
                },
                {
                  "title": "Langdb Data Analyst",
                  "href": "/docs/examples/models/langdb/data-analyst"
                },
                {
                  "title": "Langdb Finance Agent",
                  "href": "/docs/examples/models/langdb/finance-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/langdb/retry"
                },
                {
                  "title": "Langdb Structured Output",
                  "href": "/docs/examples/models/langdb/structured-output"
                },
                {
                  "title": "Langdb Web Search",
                  "href": "/docs/examples/models/langdb/web-search"
                }
              ]
            },
            {
              "title": "LiteLLM",
              "href": "/docs/examples/models/litellm/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/litellm/overview"
                },
                {
                  "title": "Litellm Audio Input Agent",
                  "href": "/docs/examples/models/litellm/audio-input-agent"
                },
                {
                  "title": "Litellm Basic",
                  "href": "/docs/examples/models/litellm/basic"
                },
                {
                  "title": "Litellm Basic Gpt",
                  "href": "/docs/examples/models/litellm/basic-gpt"
                },
                {
                  "title": "Litellm Db",
                  "href": "/docs/examples/models/litellm/db"
                },
                {
                  "title": "Litellm Image Agent",
                  "href": "/docs/examples/models/litellm/image-agent"
                },
                {
                  "title": "Litellm Image Agent Bytes",
                  "href": "/docs/examples/models/litellm/image-agent-bytes"
                },
                {
                  "title": "Litellm Knowledge",
                  "href": "/docs/examples/models/litellm/knowledge"
                },
                {
                  "title": "Litellm Memory",
                  "href": "/docs/examples/models/litellm/memory"
                },
                {
                  "title": "Litellm Metrics",
                  "href": "/docs/examples/models/litellm/metrics"
                },
                {
                  "title": "Litellm Pdf Input Bytes",
                  "href": "/docs/examples/models/litellm/pdf-input-bytes"
                },
                {
                  "title": "Litellm Pdf Input Local",
                  "href": "/docs/examples/models/litellm/pdf-input-local"
                },
                {
                  "title": "Litellm Pdf Input Url",
                  "href": "/docs/examples/models/litellm/pdf-input-url"
                },
                {
                  "title": "LiteLLM Reasoning Agent Example",
                  "href": "/docs/examples/models/litellm/reasoning-agent"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/litellm/retry"
                },
                {
                  "title": "Litellm Structured Output",
                  "href": "/docs/examples/models/litellm/structured-output"
                },
                {
                  "title": "Litellm Tool Use",
                  "href": "/docs/examples/models/litellm/tool-use"
                }
              ]
            },
            {
              "title": "LiteLLM (OpenAI)",
              "href": "/docs/examples/models/litellm-openai/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/litellm-openai/overview"
                },
                {
                  "title": "Please first install litellm[proxy] by running: uv pip install 'litellm[proxy]",
                  "href": "/docs/examples/models/litellm-openai/audio-input-agent"
                },
                {
                  "title": "Litellm Openai Basic",
                  "href": "/docs/examples/models/litellm-openai/basic"
                },
                {
                  "title": "Litellm Openai Tool Use",
                  "href": "/docs/examples/models/litellm-openai/tool-use"
                }
              ]
            },
            {
              "title": "Moonshot",
              "href": "/docs/examples/models/moonshot/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/moonshot/overview"
                },
                {
                  "title": "Moonshot Basic",
                  "href": "/docs/examples/models/moonshot/basic"
                },
                {
                  "title": "Moonshot Tool Use",
                  "href": "/docs/examples/models/moonshot/tool-use"
                }
              ]
            },
            {
              "title": "N1N",
              "href": "/docs/examples/models/n1n/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/n1n/overview"
                },
                {
                  "title": "N1N Basic",
                  "href": "/docs/examples/models/n1n/basic"
                },
                {
                  "title": "N1N Tool Use",
                  "href": "/docs/examples/models/n1n/tool-use"
                }
              ]
            },
            {
              "title": "Nebius",
              "href": "/docs/examples/models/nebius/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/nebius/overview"
                },
                {
                  "title": "Nebius Basic",
                  "href": "/docs/examples/models/nebius/basic"
                },
                {
                  "title": "Nebius Db",
                  "href": "/docs/examples/models/nebius/db"
                },
                {
                  "title": "Nebius Knowledge",
                  "href": "/docs/examples/models/nebius/knowledge"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/nebius/retry"
                },
                {
                  "title": "Nebius Structured Output",
                  "href": "/docs/examples/models/nebius/structured-output"
                },
                {
                  "title": "Nebius Tool Use",
                  "href": "/docs/examples/models/nebius/tool-use"
                }
              ]
            },
            {
              "title": "Neosantara",
              "href": "/docs/examples/models/neosantara/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/neosantara/overview"
                },
                {
                  "title": "Neosantara Basic",
                  "href": "/docs/examples/models/neosantara/basic"
                },
                {
                  "title": "Neosantara Structured Output",
                  "href": "/docs/examples/models/neosantara/structured-output"
                },
                {
                  "title": "Neosantara Tool Use",
                  "href": "/docs/examples/models/neosantara/tool-use"
                }
              ]
            },
            {
              "title": "Nexus",
              "href": "/docs/examples/models/nexus/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/nexus/overview"
                },
                {
                  "title": "Nexus Basic",
                  "href": "/docs/examples/models/nexus/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/nexus/retry"
                },
                {
                  "title": "Nexus Tool Use",
                  "href": "/docs/examples/models/nexus/tool-use"
                }
              ]
            },
            {
              "title": "OpenRouter",
              "href": "/docs/examples/models/openrouter/responses/overview",
              "items": [
                {
                  "title": "Responses API",
                  "href": "/docs/examples/models/openrouter/responses/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/examples/models/openrouter/responses/overview"
                    },
                    {
                      "title": "Basic Usage",
                      "href": "/docs/examples/models/openrouter/responses/basic"
                    },
                    {
                      "title": "Fallback Routing",
                      "href": "/docs/examples/models/openrouter/responses/fallback"
                    },
                    {
                      "title": "Streaming",
                      "href": "/docs/examples/models/openrouter/responses/stream"
                    },
                    {
                      "title": "Structured Output",
                      "href": "/docs/examples/models/openrouter/responses/structured-output"
                    },
                    {
                      "title": "Tools",
                      "href": "/docs/examples/models/openrouter/responses/tool-use"
                    }
                  ]
                },
                {
                  "title": "Chat API",
                  "href": "/docs/examples/models/openrouter/chat/overview",
                  "items": [
                    {
                      "title": "Overview",
                      "href": "/docs/examples/models/openrouter/chat/overview"
                    },
                    {
                      "title": "Basic",
                      "href": "/docs/examples/models/openrouter/chat/basic"
                    },
                    {
                      "title": "Dynamic Model Router",
                      "href": "/docs/examples/models/openrouter/chat/dynamic-model-router"
                    },
                    {
                      "title": "Retry",
                      "href": "/docs/examples/models/openrouter/chat/retry"
                    },
                    {
                      "title": "Structured Output",
                      "href": "/docs/examples/models/openrouter/chat/structured-output"
                    },
                    {
                      "title": "Tools",
                      "href": "/docs/examples/models/openrouter/chat/tool-use"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Perplexity",
              "href": "/docs/examples/models/perplexity/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/perplexity/overview"
                },
                {
                  "title": "Perplexity Basic",
                  "href": "/docs/examples/models/perplexity/basic"
                },
                {
                  "title": "Perplexity Knowledge",
                  "href": "/docs/examples/models/perplexity/knowledge"
                },
                {
                  "title": "This recipe shows how to use personalized memories and summaries in an agent.",
                  "href": "/docs/examples/models/perplexity/memory"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/perplexity/retry"
                },
                {
                  "title": "Perplexity Structured Output",
                  "href": "/docs/examples/models/perplexity/structured-output"
                },
                {
                  "title": "Perplexity Web Search",
                  "href": "/docs/examples/models/perplexity/web-search"
                }
              ]
            },
            {
              "title": "Portkey",
              "href": "/docs/examples/models/portkey/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/portkey/overview"
                },
                {
                  "title": "Portkey Basic",
                  "href": "/docs/examples/models/portkey/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/portkey/retry"
                },
                {
                  "title": "Portkey Structured Output",
                  "href": "/docs/examples/models/portkey/structured-output"
                },
                {
                  "title": "Portkey Tool Use",
                  "href": "/docs/examples/models/portkey/tool-use"
                }
              ]
            },
            {
              "title": "Requesty",
              "href": "/docs/examples/models/requesty/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/requesty/overview"
                },
                {
                  "title": "Requesty Basic",
                  "href": "/docs/examples/models/requesty/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/requesty/retry"
                },
                {
                  "title": "Requesty Structured Output",
                  "href": "/docs/examples/models/requesty/structured-output"
                },
                {
                  "title": "Requesty Tool Use",
                  "href": "/docs/examples/models/requesty/tool-use"
                }
              ]
            },
            {
              "title": "SambaNova",
              "href": "/docs/examples/models/sambanova/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/sambanova/overview"
                },
                {
                  "title": "Sambanova Basic",
                  "href": "/docs/examples/models/sambanova/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/sambanova/retry"
                }
              ]
            },
            {
              "title": "SiliconFlow",
              "href": "/docs/examples/models/siliconflow/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/siliconflow/overview"
                },
                {
                  "title": "Siliconflow Basic",
                  "href": "/docs/examples/models/siliconflow/basic"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/siliconflow/retry"
                },
                {
                  "title": "Siliconflow Structured Output",
                  "href": "/docs/examples/models/siliconflow/structured-output"
                },
                {
                  "title": "Siliconflow Tool Use",
                  "href": "/docs/examples/models/siliconflow/tool-use"
                }
              ]
            },
            {
              "title": "Vercel",
              "href": "/docs/examples/models/vercel/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/models/vercel/overview"
                },
                {
                  "title": "Vercel Basic",
                  "href": "/docs/examples/models/vercel/basic"
                },
                {
                  "title": "Vercel Image Agent",
                  "href": "/docs/examples/models/vercel/image-agent"
                },
                {
                  "title": "Vercel Knowledge",
                  "href": "/docs/examples/models/vercel/knowledge"
                },
                {
                  "title": "Retry",
                  "href": "/docs/examples/models/vercel/retry"
                },
                {
                  "title": "Build a Web Search Agent using xAI.",
                  "href": "/docs/examples/models/vercel/tool-use"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "Tools",
      "items": [
        {
          "title": "Overview",
          "href": "/docs/examples/tools/overview"
        },
        {
          "title": "Tool Hooks",
          "href": "/docs/examples/tools/tool-hooks/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/tools/tool-hooks/overview"
            },
            {
              "title": "Pre and Post Hooks",
              "href": "/docs/examples/tools/tool-hooks/pre-and-post-hooks"
            },
            {
              "title": "Tool Hook",
              "href": "/docs/examples/tools/tool-hooks/tool-hook"
            },
            {
              "title": "Tool Hooks in Toolkit",
              "href": "/docs/examples/tools/tool-hooks/tool-hook-in-toolkit"
            },
            {
              "title": "Tool Hooks in Toolkit with State",
              "href": "/docs/examples/tools/tool-hooks/tool-hook-in-toolkit-with-state"
            },
            {
              "title": "Nested Tool Hooks in Toolkit with State",
              "href": "/docs/examples/tools/tool-hooks/tool-hook-in-toolkit-with-state-nested"
            },
            {
              "title": "Nested Tool Hooks in Toolkit",
              "href": "/docs/examples/tools/tool-hooks/tool-hooks-in-toolkit-nested"
            }
          ]
        },
        {
          "title": "Handling Tool Errors",
          "href": "/docs/examples/tools/exceptions/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/tools/exceptions/overview"
            },
            {
              "title": "Retry Tool",
              "href": "/docs/examples/tools/exceptions/retry-tool-call"
            },
            {
              "title": "Post-Hook Retry",
              "href": "/docs/examples/tools/exceptions/retry-tool-call-from-post-hook"
            },
            {
              "title": "Stop Agent",
              "href": "/docs/examples/tools/exceptions/stop-agent-exception"
            }
          ]
        },
        {
          "title": "Tool Decorator",
          "href": "/docs/examples/tools/tool-decorator/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/tools/tool-decorator/overview"
            },
            {
              "title": "Tool Decorator",
              "href": "/docs/examples/tools/tool-decorator/tool-decorator"
            },
            {
              "title": "Async Tool Decorator",
              "href": "/docs/examples/tools/tool-decorator/async-tool-decorator"
            },
            {
              "title": "Tool Decorator On Class Method",
              "href": "/docs/examples/tools/tool-decorator/tool-decorator-on-class-method"
            },
            {
              "title": "Tool Decorator With Hook",
              "href": "/docs/examples/tools/tool-decorator/tool-decorator-with-hook"
            },
            {
              "title": "Tool Decorator with Instructions",
              "href": "/docs/examples/tools/tool-decorator/tool-decorator-with-instructions"
            },
            {
              "title": "Cache Tool Calls",
              "href": "/docs/examples/tools/tool-decorator/cache-tool-calls"
            },
            {
              "title": "Stop After Tool Call",
              "href": "/docs/examples/tools/tool-decorator/stop-after-tool-call"
            }
          ]
        },
        {
          "title": "MCP",
          "href": "/docs/examples/tools/mcp/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/tools/mcp/overview"
            },
            {
              "title": "MCP Toolbox",
              "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/overview"
                },
                {
                  "title": "Connect MCP Toolbox",
                  "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/agent"
                },
                {
                  "title": "AgentOS",
                  "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/agent-os"
                },
                {
                  "title": "Hotel Management Typesafe",
                  "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/hotel-management-typesafe"
                },
                {
                  "title": "Hotel Search and Booking",
                  "href": "/docs/examples/tools/mcp/mcp-toolbox-demo/hotel-management-workflows"
                }
              ]
            },
            {
              "title": "Dynamic Headers",
              "href": "/docs/examples/tools/mcp/dynamic-headers/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/tools/mcp/dynamic-headers/overview"
                },
                {
                  "title": "Dynamic Headers",
                  "href": "/docs/examples/tools/mcp/dynamic-headers/client"
                },
                {
                  "title": "Server",
                  "href": "/docs/examples/tools/mcp/dynamic-headers/server"
                }
              ]
            },
            {
              "title": "Local Server",
              "href": "/docs/examples/tools/mcp/local-server/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/tools/mcp/local-server/overview"
                },
                {
                  "title": "Client",
                  "href": "/docs/examples/tools/mcp/local-server/client"
                },
                {
                  "title": "Server",
                  "href": "/docs/examples/tools/mcp/local-server/server"
                }
              ]
            },
            {
              "title": "SSE Transport",
              "href": "/docs/examples/tools/mcp/sse-transport/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/tools/mcp/sse-transport/overview"
                },
                {
                  "title": "Client",
                  "href": "/docs/examples/tools/mcp/sse-transport/client"
                },
                {
                  "title": "Server",
                  "href": "/docs/examples/tools/mcp/sse-transport/server"
                }
              ]
            },
            {
              "title": "Streamable HTTP",
              "href": "/docs/examples/tools/mcp/streamable-http-transport/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/tools/mcp/streamable-http-transport/overview"
                },
                {
                  "title": "Client",
                  "href": "/docs/examples/tools/mcp/streamable-http-transport/client"
                },
                {
                  "title": "Server",
                  "href": "/docs/examples/tools/mcp/streamable-http-transport/server"
                }
              ]
            },
            {
              "title": "Kern Mcp",
              "href": "/docs/examples/tools/mcp/kern-mcp"
            },
            {
              "title": "MCP Airbnb Agent",
              "href": "/docs/examples/tools/mcp/airbnb"
            },
            {
              "title": "MCP Brave Agent",
              "href": "/docs/examples/tools/mcp/brave"
            },
            {
              "title": "MCP CLI",
              "href": "/docs/examples/tools/mcp/cli"
            },
            {
              "title": "MCP Filesystem Agent",
              "href": "/docs/examples/tools/mcp/filesystem"
            },
            {
              "title": "GibsonAI MCP Server",
              "href": "/docs/examples/tools/mcp/gibsonai"
            },
            {
              "title": "MCP GitHub Agent",
              "href": "/docs/examples/tools/mcp/github"
            },
            {
              "title": "MCP Graphiti Agent",
              "href": "/docs/examples/tools/mcp/graphiti"
            },
            {
              "title": "Groq and MCP Agents",
              "href": "/docs/examples/tools/mcp/groq-mcp"
            },
            {
              "title": "Include Exclude Tools",
              "href": "/docs/examples/tools/mcp/include-exclude-tools"
            },
            {
              "title": "Include Tools",
              "href": "/docs/examples/tools/mcp/include-tools"
            },
            {
              "title": "Mcp Toolbox For Db",
              "href": "/docs/examples/tools/mcp/mcp-toolbox-for-db"
            },
            {
              "title": "Mem0 MCP",
              "href": "/docs/examples/tools/mcp/mem0"
            },
            {
              "title": "Multiple Servers",
              "href": "/docs/examples/tools/mcp/multiple-servers"
            },
            {
              "title": "MCP Server Failure",
              "href": "/docs/examples/tools/mcp/multiple-servers-allow-partial-failure"
            },
            {
              "title": "Notion MCP Agent",
              "href": "/docs/examples/tools/mcp/notion-mcp-agent"
            },
            {
              "title": "Oxylabs",
              "href": "/docs/examples/tools/mcp/oxylabs"
            },
            {
              "title": "MCP Parallel Agent",
              "href": "/docs/examples/tools/mcp/parallel"
            },
            {
              "title": "Pipedream MCP Server",
              "href": "/docs/examples/tools/mcp/pipedream-auth"
            },
            {
              "title": "Pipedream (Google Calendar MCP)",
              "href": "/docs/examples/tools/mcp/pipedream-google-calendar"
            },
            {
              "title": "Pipedream (LinkedIn MCP)",
              "href": "/docs/examples/tools/mcp/pipedream-linkedin"
            },
            {
              "title": "Pipedream (Slack MCP)",
              "href": "/docs/examples/tools/mcp/pipedream-slack"
            },
            {
              "title": "Qdrant",
              "href": "/docs/examples/tools/mcp/qdrant"
            },
            {
              "title": "Sequential Thinking",
              "href": "/docs/examples/tools/mcp/sequential-thinking"
            },
            {
              "title": "Stagehand MCP Agent",
              "href": "/docs/examples/tools/mcp/stagehand"
            },
            {
              "title": "Stripe MCP Agent",
              "href": "/docs/examples/tools/mcp/stripe"
            },
            {
              "title": "Supabase MCP Agent",
              "href": "/docs/examples/tools/mcp/supabase"
            },
            {
              "title": "Tool Name Prefix",
              "href": "/docs/examples/tools/mcp/tool-name-prefix"
            }
          ]
        },
        {
          "title": "Search & Web",
          "href": "/docs/examples/tools/baidusearch-tools",
          "items": [
            {
              "title": "Baidu Search",
              "href": "/docs/examples/tools/baidusearch-tools"
            },
            {
              "title": "Brave Search",
              "href": "/docs/examples/tools/bravesearch-tools"
            },
            {
              "title": "Duckduckgo",
              "href": "/docs/examples/tools/duckduckgo-tools"
            },
            {
              "title": "Exa",
              "href": "/docs/examples/tools/exa-tools"
            },
            {
              "title": "Firecrawl",
              "href": "/docs/examples/tools/firecrawl-tools"
            },
            {
              "title": "Hackernews",
              "href": "/docs/examples/tools/hackernews-tools"
            },
            {
              "title": "Jina Reader",
              "href": "/docs/examples/tools/jinareader-tools"
            },
            {
              "title": "Linkup",
              "href": "/docs/examples/tools/linkup-tools"
            },
            {
              "title": "Newspaper",
              "href": "/docs/examples/tools/newspaper-tools"
            },
            {
              "title": "Newspaper4K",
              "href": "/docs/examples/tools/newspaper4k-tools"
            },
            {
              "title": "Reddit",
              "href": "/docs/examples/tools/reddit-tools"
            },
            {
              "title": "ScrapeGraph",
              "href": "/docs/examples/tools/scrapegraph-tools"
            },
            {
              "title": "SearXNG",
              "href": "/docs/examples/tools/searxng-tools"
            },
            {
              "title": "SERP API",
              "href": "/docs/examples/tools/serpapi-tools"
            },
            {
              "title": "Serper",
              "href": "/docs/examples/tools/serper-tools"
            },
            {
              "title": "Spider",
              "href": "/docs/examples/tools/spider-tools"
            },
            {
              "title": "Tavily",
              "href": "/docs/examples/tools/tavily-tools"
            },
            {
              "title": "Trafilatura",
              "href": "/docs/examples/tools/trafilatura-tools"
            },
            {
              "title": "Web",
              "href": "/docs/examples/tools/web-tools"
            },
            {
              "title": "Webbrowser",
              "href": "/docs/examples/tools/webbrowser-tools"
            },
            {
              "title": "Websearch",
              "href": "/docs/examples/tools/websearch-tools"
            }
          ]
        },
        {
          "title": "Data & Analytics",
          "href": "/docs/examples/tools/arxiv-tools",
          "items": [
            {
              "title": "ArXiv",
              "href": "/docs/examples/tools/arxiv-tools"
            },
            {
              "title": "CSV",
              "href": "/docs/examples/tools/csv-tools"
            },
            {
              "title": "Custom API",
              "href": "/docs/examples/tools/custom-api-tools"
            },
            {
              "title": "Duckdb",
              "href": "/docs/examples/tools/duckdb-tools"
            },
            {
              "title": "File Generation",
              "href": "/docs/examples/tools/file-generation-tools"
            },
            {
              "title": "File Management",
              "href": "/docs/examples/tools/file-tools"
            },
            {
              "title": "Financial Datasets",
              "href": "/docs/examples/tools/financial-datasets-tools"
            },
            {
              "title": "Google BigQuery",
              "href": "/docs/examples/tools/google-bigquery-tools"
            },
            {
              "title": "Google Sheets",
              "href": "/docs/examples/tools/googlesheets-tools"
            },
            {
              "title": "Knowledge",
              "href": "/docs/examples/tools/knowledge-tool"
            },
            {
              "title": "Neo4j",
              "href": "/docs/examples/tools/neo4j-tools"
            },
            {
              "title": "OpenBB",
              "href": "/docs/examples/tools/openbb-tools"
            },
            {
              "title": "Pandas Tools",
              "href": "/docs/examples/tools/pandas-tools"
            },
            {
              "title": "Postgres",
              "href": "/docs/examples/tools/postgres-tools"
            },
            {
              "title": "PubMed",
              "href": "/docs/examples/tools/pubmed-tools"
            },
            {
              "title": "Amazon Redshift",
              "href": "/docs/examples/tools/redshift-tools"
            },
            {
              "title": "SQL",
              "href": "/docs/examples/tools/sql-tools"
            },
            {
              "title": "Wikipedia",
              "href": "/docs/examples/tools/wikipedia-tools"
            },
            {
              "title": "YFinance",
              "href": "/docs/examples/tools/yfinance-tools"
            },
            {
              "title": "Youtube",
              "href": "/docs/examples/tools/youtube-tools"
            }
          ]
        },
        {
          "title": "Communication",
          "href": "/docs/examples/tools/calcom-tools",
          "items": [
            {
              "title": "Cal.com",
              "href": "/docs/examples/tools/calcom-tools"
            },
            {
              "title": "Discord",
              "href": "/docs/examples/tools/discord-tools"
            },
            {
              "title": "Email",
              "href": "/docs/examples/tools/email-tools"
            },
            {
              "title": "Gmail",
              "href": "/docs/examples/tools/gmail-tools"
            },
            {
              "title": "Google Calendar",
              "href": "/docs/examples/tools/googlecalendar-tools"
            },
            {
              "title": "Notion",
              "href": "/docs/examples/tools/notion-tools"
            },
            {
              "title": "Resend",
              "href": "/docs/examples/tools/resend-tools"
            },
            {
              "title": "Slack Tools",
              "href": "/docs/examples/tools/slack-tools"
            },
            {
              "title": "Telegram",
              "href": "/docs/examples/tools/telegram-tools"
            },
            {
              "title": "Todoist",
              "href": "/docs/examples/tools/todoist-tools"
            },
            {
              "title": "Trello",
              "href": "/docs/examples/tools/trello-tools"
            },
            {
              "title": "Twilio",
              "href": "/docs/examples/tools/twilio-tools"
            },
            {
              "title": "Webex",
              "href": "/docs/examples/tools/webex-tools"
            },
            {
              "title": "WhatsApp",
              "href": "/docs/examples/tools/whatsapp-tools"
            },
            {
              "title": "Zendesk",
              "href": "/docs/examples/tools/zendesk-tools"
            },
            {
              "title": "Zoom",
              "href": "/docs/examples/tools/zoom-tools"
            }
          ]
        },
        {
          "title": "AI & Media",
          "href": "/docs/examples/tools/brandfetch-tools",
          "items": [
            {
              "title": "Brandfetch",
              "href": "/docs/examples/tools/brandfetch-tools"
            },
            {
              "title": "Calculator",
              "href": "/docs/examples/tools/calculator-tools"
            },
            {
              "title": "Cartesia",
              "href": "/docs/examples/tools/cartesia-tools"
            },
            {
              "title": "Dalle",
              "href": "/docs/examples/tools/dalle-tools"
            },
            {
              "title": "Desi Vocal",
              "href": "/docs/examples/tools/desi-vocal-tools"
            },
            {
              "title": "Elevenlabs",
              "href": "/docs/examples/tools/elevenlabs-tools"
            },
            {
              "title": "Fal",
              "href": "/docs/examples/tools/fal-tools"
            },
            {
              "title": "Giphy",
              "href": "/docs/examples/tools/giphy-tools"
            },
            {
              "title": "Lumalabs",
              "href": "/docs/examples/tools/lumalabs-tools"
            },
            {
              "title": "MLX Transcribe",
              "href": "/docs/examples/tools/mlx-transcribe-tools"
            },
            {
              "title": "Models Lab Tools",
              "href": "/docs/examples/tools/models-lab-tools"
            },
            {
              "title": "Moviepy Video",
              "href": "/docs/examples/tools/moviepy-video-tools"
            },
            {
              "title": "Opencv Tools",
              "href": "/docs/examples/tools/opencv-tools"
            },
            {
              "title": "Replicate",
              "href": "/docs/examples/tools/replicate-tools"
            },
            {
              "title": "Spotify",
              "href": "/docs/examples/tools/spotify-tools"
            },
            {
              "title": "Unsplash",
              "href": "/docs/examples/tools/unsplash-tools"
            },
            {
              "title": "Visualization Tools",
              "href": "/docs/examples/tools/visualization-tools"
            }
          ]
        },
        {
          "title": "Dev & Infrastructure",
          "href": "/docs/examples/tools/agentql-tools",
          "items": [
            {
              "title": "AgentQL",
              "href": "/docs/examples/tools/agentql-tools"
            },
            {
              "title": "Airflow",
              "href": "/docs/examples/tools/airflow-tools"
            },
            {
              "title": "Apify",
              "href": "/docs/examples/tools/apify-tools"
            },
            {
              "title": "AWS Lambda",
              "href": "/docs/examples/tools/aws-lambda-tools"
            },
            {
              "title": "AWS SES",
              "href": "/docs/examples/tools/aws-ses-tools"
            },
            {
              "title": "Bitbucket",
              "href": "/docs/examples/tools/bitbucket-tools"
            },
            {
              "title": "Brightdata",
              "href": "/docs/examples/tools/brightdata-tools"
            },
            {
              "title": "Browserbase",
              "href": "/docs/examples/tools/browserbase-tools"
            },
            {
              "title": "ClickUp",
              "href": "/docs/examples/tools/clickup-tools"
            },
            {
              "title": "Composio",
              "href": "/docs/examples/tools/composio-tools"
            },
            {
              "title": "Confluence",
              "href": "/docs/examples/tools/confluence-tools"
            },
            {
              "title": "Crawl4AI",
              "href": "/docs/examples/tools/crawl4ai-tools"
            },
            {
              "title": "Custom Events",
              "href": "/docs/examples/tools/custom-tool-events"
            },
            {
              "title": "Custom Tools",
              "href": "/docs/examples/tools/custom-tools"
            },
            {
              "title": "Daytona",
              "href": "/docs/examples/tools/daytona-tools"
            },
            {
              "title": "Docling",
              "href": "/docs/examples/tools/docling-tools"
            },
            {
              "title": "Docker",
              "href": "/docs/examples/tools/docker-tools"
            },
            {
              "title": "E2B",
              "href": "/docs/examples/tools/e2b-tools"
            },
            {
              "title": "EVM",
              "href": "/docs/examples/tools/evm-tools"
            },
            {
              "title": "GitHub",
              "href": "/docs/examples/tools/github-tools"
            },
            {
              "title": "Jira",
              "href": "/docs/examples/tools/jira-tools"
            },
            {
              "title": "Linear",
              "href": "/docs/examples/tools/linear-tools"
            },
            {
              "title": "MCP",
              "href": "/docs/examples/tools/mcp-tools"
            },
            {
              "title": "Mem0",
              "href": "/docs/examples/tools/mem0-tools"
            },
            {
              "title": "Multi-tools Usage",
              "href": "/docs/examples/tools/multiple-tools"
            },
            {
              "title": "Nano Banana",
              "href": "/docs/examples/tools/nano-banana-tools"
            },
            {
              "title": "OpenWeather",
              "href": "/docs/examples/tools/openweather-tools"
            },
            {
              "title": "Oxylabs",
              "href": "/docs/examples/tools/oxylabs-tools"
            },
            {
              "title": "Parallel",
              "href": "/docs/examples/tools/parallel-tools"
            },
            {
              "title": "Python Function",
              "href": "/docs/examples/tools/python-function-as-tool"
            },
            {
              "title": "Python",
              "href": "/docs/examples/tools/python-tools"
            },
            {
              "title": "Salesforce",
              "href": "/docs/examples/tools/salesforce-tools"
            },
            {
              "title": "Shell",
              "href": "/docs/examples/tools/shell-tools"
            },
            {
              "title": "Shopify",
              "href": "/docs/examples/tools/shopify-tools"
            },
            {
              "title": "Sleep",
              "href": "/docs/examples/tools/sleep-tools"
            },
            {
              "title": "Valyu",
              "href": "/docs/examples/tools/valyu-tools"
            },
            {
              "title": "X",
              "href": "/docs/examples/tools/x-tools"
            }
          ]
        },
        {
          "title": "Other Tools",
          "href": "/docs/examples/tools/google-drive",
          "items": [
            {
              "title": "Google Drive",
              "href": "/docs/examples/tools/google-drive"
            },
            {
              "title": "Google Maps",
              "href": "/docs/examples/tools/google-maps-tools"
            },
            {
              "title": "Azure OpenaAI",
              "href": "/docs/examples/tools/models/azure-openai-tools"
            },
            {
              "title": "Gemini Image Generation",
              "href": "/docs/examples/tools/models/gemini-image-generation"
            },
            {
              "title": "Gemini Video Generation",
              "href": "/docs/examples/tools/models/gemini-video-generation"
            },
            {
              "title": "Morph",
              "href": "/docs/examples/tools/models/morph"
            },
            {
              "title": "Nebius",
              "href": "/docs/examples/tools/models/nebius-tools"
            },
            {
              "title": "OpenAI",
              "href": "/docs/examples/tools/models/openai-tools"
            },
            {
              "title": "Add Tool After Initialization",
              "href": "/docs/examples/tools/other/add-tool-after-initialization"
            },
            {
              "title": "Cache Tool Calls",
              "href": "/docs/examples/tools/other/cache-tool-calls"
            },
            {
              "title": "Complex Input Types",
              "href": "/docs/examples/tools/other/complex-input-types"
            },
            {
              "title": "HITL",
              "href": "/docs/examples/tools/other/human-in-the-loop"
            },
            {
              "title": "Include Exclude Tools",
              "href": "/docs/examples/tools/other/include-exclude-tools"
            },
            {
              "title": "Include/Exclude Tools (Custom Toolkit)",
              "href": "/docs/examples/tools/other/include-exclude-tools-custom-toolkit"
            },
            {
              "title": "Session State Tool",
              "href": "/docs/examples/tools/other/session-state-tool"
            },
            {
              "title": "Stop After Tool Call",
              "href": "/docs/examples/tools/other/stop-after-tool-call"
            },
            {
              "title": "Stop After Tool Call Dual Inheritance",
              "href": "/docs/examples/tools/other/stop-after-tool-call-dual-inheritance"
            },
            {
              "title": "Stop After Tool Call In Toolkit",
              "href": "/docs/examples/tools/other/stop-after-tool-call-in-toolkit"
            },
            {
              "title": "Seltz",
              "href": "/docs/examples/tools/seltz-tools"
            },
            {
              "title": "Website",
              "href": "/docs/examples/tools/website-tools"
            },
            {
              "title": "Website Knowledge",
              "href": "/docs/examples/tools/website-tools-knowledge"
            },
            {
              "title": "Zep",
              "href": "/docs/examples/tools/zep-tools"
            }
          ]
        }
      ]
    },
    {
      "group": "More",
      "items": [
        {
          "title": "Agent OS",
          "href": "/docs/examples/agent-os/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/agent-os/overview"
            },
            {
              "title": "Kern Agent",
              "href": "/docs/examples/agent-os/kern-agent"
            },
            {
              "title": "Minimal example for AgentOS.",
              "href": "/docs/examples/agent-os/basic"
            },
            {
              "title": "AgentOS Demo",
              "href": "/docs/examples/agent-os/demo"
            },
            {
              "title": "Advanced Demo",
              "href": "/docs/examples/agent-os/advanced-demo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/advanced-demo/overview"
                },
                {
                  "title": "Agents",
                  "href": "/docs/examples/agent-os/advanced-demo/agents"
                },
                {
                  "title": "Teams",
                  "href": "/docs/examples/agent-os/advanced-demo/teams"
                },
                {
                  "title": "AgentOS Demo",
                  "href": "/docs/examples/agent-os/advanced-demo/demo"
                },
                {
                  "title": "File Output",
                  "href": "/docs/examples/agent-os/advanced-demo/file-output"
                },
                {
                  "title": "Mcp Demo",
                  "href": "/docs/examples/agent-os/advanced-demo/mcp-demo"
                },
                {
                  "title": "Multiple Knowledge Bases",
                  "href": "/docs/examples/agent-os/advanced-demo/multiple-knowledge-bases"
                },
                {
                  "title": "Advanced Demo Reasoning Demo",
                  "href": "/docs/examples/agent-os/advanced-demo/reasoning-demo"
                },
                {
                  "title": "Reasoning Model",
                  "href": "/docs/examples/agent-os/advanced-demo/reasoning-model"
                },
                {
                  "title": "Teams Demo",
                  "href": "/docs/examples/agent-os/advanced-demo/teams-demo"
                }
              ]
            },
            {
              "title": "Background Tasks",
              "href": "/docs/examples/agent-os/background-tasks/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/background-tasks/overview"
                },
                {
                  "title": "Example: Per-Hook Background Control with AgentAsJudgeEval in AgentOS",
                  "href": "/docs/examples/agent-os/background-tasks/background-evals-example"
                },
                {
                  "title": "Example: Using Background Post-Hooks in AgentOS",
                  "href": "/docs/examples/agent-os/background-tasks/background-hooks-decorator"
                },
                {
                  "title": "Example: Using Background Post-Hooks in AgentOS",
                  "href": "/docs/examples/agent-os/background-tasks/background-hooks-example"
                },
                {
                  "title": "Example: Background Hooks with Teams in AgentOS",
                  "href": "/docs/examples/agent-os/background-tasks/background-hooks-team"
                },
                {
                  "title": "Example: Background Hooks with Workflows in AgentOS",
                  "href": "/docs/examples/agent-os/background-tasks/background-hooks-workflow"
                },
                {
                  "title": "Example: Background Output Evaluation with Agent-as-Judge",
                  "href": "/docs/examples/agent-os/background-tasks/background-output-evaluation"
                },
                {
                  "title": "Background Tasks Evals Demo",
                  "href": "/docs/examples/agent-os/background-tasks/evals-demo"
                }
              ]
            },
            {
              "title": "Client",
              "href": "/docs/examples/agent-os/client/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/client/overview"
                },
                {
                  "title": "Basic AgentOSClient Example",
                  "href": "/docs/examples/agent-os/client/basic-client"
                },
                {
                  "title": "Knowledge Search with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/knowledge-search"
                },
                {
                  "title": "Memory Operations with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/memory-operations"
                },
                {
                  "title": "Running Agents with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/run-agents"
                },
                {
                  "title": "Running Evaluations with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/run-evals"
                },
                {
                  "title": "Running Teams with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/run-teams"
                },
                {
                  "title": "Running Workflows with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/run-workflows"
                },
                {
                  "title": "AgentOS Server for Cookbook Client Examples",
                  "href": "/docs/examples/agent-os/client/server"
                },
                {
                  "title": "Session Management with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/session-management"
                },
                {
                  "title": "Uploading Content to Knowledge Base with AgentOSClient",
                  "href": "/docs/examples/agent-os/client/upload-content"
                }
              ]
            },
            {
              "title": "Client A2A",
              "href": "/docs/examples/agent-os/client-a2a/servers/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/client-a2a/servers/overview"
                },
                {
                  "title": "Basic A2A Messaging with A2AClient",
                  "href": "/docs/examples/agent-os/client-a2a/basic-messaging"
                },
                {
                  "title": "Connect Kern A2AClient to Google ADK A2A Server.",
                  "href": "/docs/examples/agent-os/client-a2a/connect-to-google-adk"
                },
                {
                  "title": "Error Handling with A2AClient",
                  "href": "/docs/examples/agent-os/client-a2a/error-handling"
                },
                {
                  "title": "Multi-Turn Conversations with A2AClient",
                  "href": "/docs/examples/agent-os/client-a2a/multi-turn"
                },
                {
                  "title": "Kern Server",
                  "href": "/docs/examples/agent-os/client-a2a/servers/kern-server"
                },
                {
                  "title": "Google ADK A2A Server for testing A2AClient.",
                  "href": "/docs/examples/agent-os/client-a2a/servers/google-adk-server"
                },
                {
                  "title": "Streaming A2A Messages with A2AClient",
                  "href": "/docs/examples/agent-os/client-a2a/streaming"
                }
              ]
            },
            {
              "title": "Customize",
              "href": "/docs/examples/agent-os/customize/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/customize/overview"
                },
                {
                  "title": "Example AgentOS app with a custom FastAPI app with basic routes.",
                  "href": "/docs/examples/agent-os/customize/custom-fastapi-app"
                },
                {
                  "title": "Example AgentOS app with a custom health endpoint.",
                  "href": "/docs/examples/agent-os/customize/custom-health-endpoint"
                },
                {
                  "title": "Example AgentOS app where the agent has a custom lifespan.",
                  "href": "/docs/examples/agent-os/customize/custom-lifespan"
                },
                {
                  "title": "Handle Custom Events",
                  "href": "/docs/examples/agent-os/customize/handle-custom-events"
                },
                {
                  "title": "Example AgentOS app with a custom FastAPI app with conflicting routes.",
                  "href": "/docs/examples/agent-os/customize/override-routes"
                },
                {
                  "title": "Pass Dependencies To Agent",
                  "href": "/docs/examples/agent-os/customize/pass-dependencies-to-agent"
                },
                {
                  "title": "Update From Lifespan",
                  "href": "/docs/examples/agent-os/customize/update-from-lifespan"
                }
              ]
            },
            {
              "title": "Dbs",
              "href": "/docs/examples/agent-os/dbs/surreal-db/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/overview"
                },
                {
                  "title": "AgentOS Demo",
                  "href": "/docs/examples/agent-os/dbs/agentos-default-db"
                },
                {
                  "title": "Dynamo",
                  "href": "/docs/examples/agent-os/dbs/dynamo"
                },
                {
                  "title": "Firestore",
                  "href": "/docs/examples/agent-os/dbs/firestore"
                },
                {
                  "title": "Gcs Json",
                  "href": "/docs/examples/agent-os/dbs/gcs-json"
                },
                {
                  "title": "Json Db",
                  "href": "/docs/examples/agent-os/dbs/json-db"
                },
                {
                  "title": "Mongo Database Backend",
                  "href": "/docs/examples/agent-os/dbs/mongo"
                },
                {
                  "title": "MySQL Database Backend",
                  "href": "/docs/examples/agent-os/dbs/mysql"
                },
                {
                  "title": "Neon",
                  "href": "/docs/examples/agent-os/dbs/neon"
                },
                {
                  "title": "Postgres Database Backend",
                  "href": "/docs/examples/agent-os/dbs/postgres"
                },
                {
                  "title": "Redis Db",
                  "href": "/docs/examples/agent-os/dbs/redis-db"
                },
                {
                  "title": "Singlestore",
                  "href": "/docs/examples/agent-os/dbs/singlestore"
                },
                {
                  "title": "Sqlite",
                  "href": "/docs/examples/agent-os/dbs/sqlite"
                },
                {
                  "title": "Supabase",
                  "href": "/docs/examples/agent-os/dbs/supabase"
                },
                {
                  "title": "Surreal",
                  "href": "/docs/examples/agent-os/dbs/surreal"
                },
                {
                  "title": "Agents",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/agents"
                },
                {
                  "title": "Db",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/db"
                },
                {
                  "title": "SurrealDB + AgentOS demo",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/run"
                },
                {
                  "title": "Teams",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/teams"
                },
                {
                  "title": "Workflows",
                  "href": "/docs/examples/agent-os/dbs/surreal-db/workflows"
                }
              ]
            },
            {
              "title": "Dynamic Agents",
              "href": "/docs/examples/agent-os/factories/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/factories/overview"
                },
                {
                  "title": "Tenant Agent Factory",
                  "href": "/docs/examples/agent-os/factories/tenant-agent-factory"
                },
                {
                  "title": "Input Schema Factory",
                  "href": "/docs/examples/agent-os/factories/input-schema-factory"
                },
                {
                  "title": "JWT Role Factory",
                  "href": "/docs/examples/agent-os/factories/jwt-role-factory"
                },
                {
                  "title": "HITL Factory",
                  "href": "/docs/examples/agent-os/factories/hitl-factory"
                }
              ]
            },
            {
              "title": "Integrations",
              "href": "/docs/examples/agent-os/integrations/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/integrations/overview"
                },
                {
                  "title": "Shopify Demo",
                  "href": "/docs/examples/agent-os/integrations/shopify-demo"
                }
              ]
            },
            {
              "title": "Interfaces",
              "href": "/docs/examples/agent-os/interfaces/whatsapp/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/overview"
                },
                {
                  "title": "Agent With Tools",
                  "href": "/docs/examples/agent-os/interfaces/a2a/agent-with-tools"
                },
                {
                  "title": "Basic",
                  "href": "/docs/examples/agent-os/interfaces/a2a/basic"
                },
                {
                  "title": "Airbnb Agent",
                  "href": "/docs/examples/agent-os/interfaces/a2a/multi-agent-a2a/airbnb-agent"
                },
                {
                  "title": "Trip Planning A2A Client",
                  "href": "/docs/examples/agent-os/interfaces/a2a/multi-agent-a2a/trip-planning-a2a-client"
                },
                {
                  "title": "Weather Agent",
                  "href": "/docs/examples/agent-os/interfaces/a2a/multi-agent-a2a/weather-agent"
                },
                {
                  "title": "Reasoning Agent",
                  "href": "/docs/examples/agent-os/interfaces/a2a/reasoning-agent"
                },
                {
                  "title": "Research Team",
                  "href": "/docs/examples/agent-os/interfaces/a2a/research-team"
                },
                {
                  "title": "Structured Output",
                  "href": "/docs/examples/agent-os/interfaces/a2a/structured-output"
                },
                {
                  "title": "Silent External Tools",
                  "href": "/docs/examples/agent-os/interfaces/agui/agent-with-silent-tools"
                },
                {
                  "title": "Agent With Tools",
                  "href": "/docs/examples/agent-os/interfaces/agui/agent-with-tools"
                },
                {
                  "title": "Basic",
                  "href": "/docs/examples/agent-os/interfaces/agui/basic"
                },
                {
                  "title": "Multiple Instances",
                  "href": "/docs/examples/agent-os/interfaces/agui/multiple-instances"
                },
                {
                  "title": "Reasoning Agent",
                  "href": "/docs/examples/agent-os/interfaces/agui/reasoning-agent"
                },
                {
                  "title": "Research Team",
                  "href": "/docs/examples/agent-os/interfaces/agui/research-team"
                },
                {
                  "title": "Structured Output",
                  "href": "/docs/examples/agent-os/interfaces/agui/structured-output"
                },
                {
                  "title": "AgentOS Demo",
                  "href": "/docs/examples/agent-os/interfaces/all-interfaces"
                },
                {
                  "title": "Agent With User Memory",
                  "href": "/docs/examples/agent-os/interfaces/slack/agent-with-user-memory"
                },
                {
                  "title": "Basic",
                  "href": "/docs/examples/agent-os/interfaces/slack/basic"
                },
                {
                  "title": "Basic Workflow",
                  "href": "/docs/examples/agent-os/interfaces/slack/basic-workflow"
                },
                {
                  "title": "Channel Summarizer",
                  "href": "/docs/examples/agent-os/interfaces/slack/channel-summarizer"
                },
                {
                  "title": "File Analyst",
                  "href": "/docs/examples/agent-os/interfaces/slack/file-analyst"
                },
                {
                  "title": "Multiple Instances",
                  "href": "/docs/examples/agent-os/interfaces/slack/multiple-instances"
                },
                {
                  "title": "Reasoning Agent",
                  "href": "/docs/examples/agent-os/interfaces/slack/reasoning-agent"
                },
                {
                  "title": "Research Assistant",
                  "href": "/docs/examples/agent-os/interfaces/slack/research-assistant"
                },
                {
                  "title": "Support Team",
                  "href": "/docs/examples/agent-os/interfaces/slack/support-team"
                },
                {
                  "title": "Agent With Media",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/agent-with-media"
                },
                {
                  "title": "Agent With User Memory",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/agent-with-user-memory"
                },
                {
                  "title": "Basic",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/basic"
                },
                {
                  "title": "Image Generation Model",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/image-generation-model"
                },
                {
                  "title": "Image Generation Tools",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/image-generation-tools"
                },
                {
                  "title": "Multiple Instances",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/multiple-instances"
                },
                {
                  "title": "Reasoning Agent",
                  "href": "/docs/examples/agent-os/interfaces/whatsapp/reasoning-agent"
                }
              ]
            },
            {
              "title": "Knowledge",
              "href": "/docs/examples/agent-os/knowledge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/knowledge/overview"
                },
                {
                  "title": "Agentos Excel Analyst",
                  "href": "/docs/examples/agent-os/knowledge/agentos-excel-analyst"
                },
                {
                  "title": "AgentOS Knowledge (Sync And Async)",
                  "href": "/docs/examples/agent-os/knowledge/agentos-knowledge"
                },
                {
                  "title": "Kern Docs Agent",
                  "href": "/docs/examples/agent-os/knowledge/kern-docs-agent"
                }
              ]
            },
            {
              "title": "Mcp Demo",
              "href": "/docs/examples/agent-os/mcp-demo/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/mcp-demo/overview"
                },
                {
                  "title": "AgentOS with MCPTools using dynamic headers.",
                  "href": "/docs/examples/agent-os/mcp-demo/dynamic-headers/client"
                },
                {
                  "title": "Simple MCP server that logs headers received from clients.",
                  "href": "/docs/examples/agent-os/mcp-demo/dynamic-headers/server"
                },
                {
                  "title": "Example AgentOS app with MCP enabled.",
                  "href": "/docs/examples/agent-os/mcp-demo/enable-mcp-example"
                },
                {
                  "title": "Example AgentOS app where the agent has MCPTools.",
                  "href": "/docs/examples/agent-os/mcp-demo/mcp-tools-advanced-example"
                },
                {
                  "title": "Example AgentOS app where the agent has MCPTools.",
                  "href": "/docs/examples/agent-os/mcp-demo/mcp-tools-example"
                },
                {
                  "title": "Example AgentOS app where the agent has MCPTools.",
                  "href": "/docs/examples/agent-os/mcp-demo/mcp-tools-existing-lifespan"
                },
                {
                  "title": "First run the AgentOS with enable_mcp=True",
                  "href": "/docs/examples/agent-os/mcp-demo/test-client"
                }
              ]
            },
            {
              "title": "Middleware",
              "href": "/docs/examples/agent-os/middleware/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/middleware/overview"
                },
                {
                  "title": "Agent Os With Custom Middleware",
                  "href": "/docs/examples/agent-os/middleware/agent-os-with-custom-middleware"
                },
                {
                  "title": "Agent Os With Jwt Middleware",
                  "href": "/docs/examples/agent-os/middleware/agent-os-with-jwt-middleware"
                },
                {
                  "title": "Agent Os With Jwt Middleware Cookies",
                  "href": "/docs/examples/agent-os/middleware/agent-os-with-jwt-middleware-cookies"
                },
                {
                  "title": "Custom Fastapi App With Jwt Middleware",
                  "href": "/docs/examples/agent-os/middleware/custom-fastapi-app-with-jwt-middleware"
                },
                {
                  "title": "Extract Content Middleware",
                  "href": "/docs/examples/agent-os/middleware/extract-content-middleware"
                },
                {
                  "title": "Guardrails Demo",
                  "href": "/docs/examples/agent-os/middleware/guardrails-demo"
                }
              ]
            },
            {
              "title": "Os Config",
              "href": "/docs/examples/agent-os/os-config/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/os-config/overview"
                },
                {
                  "title": "Basic",
                  "href": "/docs/examples/agent-os/os-config/basic"
                },
                {
                  "title": "Yaml Config",
                  "href": "/docs/examples/agent-os/os-config/yaml-config"
                }
              ]
            },
            {
              "title": "Rbac",
              "href": "/docs/examples/agent-os/rbac/symmetric/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/rbac/symmetric/overview"
                },
                {
                  "title": "Basic RBAC Example with AgentOS (Asymmetric Keys)",
                  "href": "/docs/examples/agent-os/rbac/asymmetric/basic"
                },
                {
                  "title": "Custom Scope Mappings Example",
                  "href": "/docs/examples/agent-os/rbac/asymmetric/custom-scope-mappings"
                },
                {
                  "title": "Advanced RBAC Example with AgentOS",
                  "href": "/docs/examples/agent-os/rbac/symmetric/advanced-scopes"
                },
                {
                  "title": "Per-Agent Permissions Example with AgentOS",
                  "href": "/docs/examples/agent-os/rbac/symmetric/agent-permissions"
                },
                {
                  "title": "Basic RBAC Example with AgentOS",
                  "href": "/docs/examples/agent-os/rbac/symmetric/basic"
                },
                {
                  "title": "Custom Scope Mappings Example",
                  "href": "/docs/examples/agent-os/rbac/symmetric/custom-scope-mappings"
                },
                {
                  "title": "Basic RBAC Example with AgentOS",
                  "href": "/docs/examples/agent-os/rbac/symmetric/with-cookie"
                }
              ]
            },
            {
              "title": "Remote",
              "href": "/docs/examples/agent-os/remote/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/remote/overview"
                },
                {
                  "title": "Google ADK A2A Server for Cookbook Examples.",
                  "href": "/docs/examples/agent-os/remote/adk-server"
                },
                {
                  "title": "Agent Os Gateway",
                  "href": "/docs/examples/agent-os/remote/agent-os-gateway"
                },
                {
                  "title": "Kern A2A Server",
                  "href": "/docs/examples/agent-os/remote/kern-a2a-server"
                },
                {
                  "title": "Remote Adk Agent",
                  "href": "/docs/examples/agent-os/remote/remote-adk-agent"
                },
                {
                  "title": "Examples demonstrating AgentOSRunner for remote execution.",
                  "href": "/docs/examples/agent-os/remote/remote-agent"
                },
                {
                  "title": "Remote Kern A2A Agent",
                  "href": "/docs/examples/agent-os/remote/remote-kern-a2a-agent"
                },
                {
                  "title": "Examples demonstrating AgentOSRunner for remote execution.",
                  "href": "/docs/examples/agent-os/remote/remote-team"
                },
                {
                  "title": "AgentOS Server for Cookbook Client Examples",
                  "href": "/docs/examples/agent-os/remote/server"
                }
              ]
            },
            {
              "title": "Scheduler",
              "href": "/docs/examples/agent-os/scheduler/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/scheduler/overview"
                },
                {
                  "title": "Async schedule management using the async ScheduleManager API.",
                  "href": "/docs/examples/agent-os/scheduler/async-schedule"
                },
                {
                  "title": "Basic scheduled agent run.",
                  "href": "/docs/examples/agent-os/scheduler/basic-schedule"
                },
                {
                  "title": "Running the scheduler inside AgentOS with programmatic schedule creation",
                  "href": "/docs/examples/agent-os/scheduler/demo"
                },
                {
                  "title": "Multi-agent scheduling with different cron patterns and payloads.",
                  "href": "/docs/examples/agent-os/scheduler/multi-agent-schedules"
                },
                {
                  "title": "Using the scheduler REST API endpoints directly.",
                  "href": "/docs/examples/agent-os/scheduler/rest-api-schedules"
                },
                {
                  "title": "Viewing and analyzing schedule run history.",
                  "href": "/docs/examples/agent-os/scheduler/run-history"
                },
                {
                  "title": "Schedule management via REST API.",
                  "href": "/docs/examples/agent-os/scheduler/schedule-management"
                },
                {
                  "title": "Schedule validation and error handling.",
                  "href": "/docs/examples/agent-os/scheduler/schedule-validation"
                },
                {
                  "title": "Running the scheduler inside AgentOS with automatic polling",
                  "href": "/docs/examples/agent-os/scheduler/scheduler-with-agentos"
                },
                {
                  "title": "Scheduling teams and workflows (not just agents).",
                  "href": "/docs/examples/agent-os/scheduler/team-workflow-schedules"
                }
              ]
            },
            {
              "title": "Schemas",
              "href": "/docs/examples/agent-os/schemas/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/schemas/overview"
                },
                {
                  "title": "Agent Input And Output Schemas",
                  "href": "/docs/examples/agent-os/schemas/agent-schemas"
                },
                {
                  "title": "Team Input And Output Schemas",
                  "href": "/docs/examples/agent-os/schemas/team-schemas"
                }
              ]
            },
            {
              "title": "Skills",
              "href": "/docs/examples/agent-os/skills/sample-skills/system-info/scripts/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/skills/sample-skills/system-info/scripts/overview"
                },
                {
                  "title": "Get basic system information.",
                  "href": "/docs/examples/agent-os/skills/sample-skills/system-info/scripts/get-system-info"
                },
                {
                  "title": "List files in a directory.",
                  "href": "/docs/examples/agent-os/skills/sample-skills/system-info/scripts/list-directory"
                },
                {
                  "title": "Skills With Agentos",
                  "href": "/docs/examples/agent-os/skills/skills-with-agentos"
                }
              ]
            },
            {
              "title": "Tracing",
              "href": "/docs/examples/agent-os/tracing/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/tracing/overview"
                },
                {
                  "title": "03 Agent With Knowledge Tracing",
                  "href": "/docs/examples/agent-os/tracing/agent-with-knowledge-tracing"
                },
                {
                  "title": "04 Agent With Reasoning Tools Tracing",
                  "href": "/docs/examples/agent-os/tracing/agent-with-reasoning-tools-tracing"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/basic-agent-tracing"
                },
                {
                  "title": "02 Basic Team Tracing",
                  "href": "/docs/examples/agent-os/tracing/basic-team-tracing"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/basic-workflow-tracing"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/dbs/basic-agent-with-mongodb"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/dbs/basic-agent-with-postgresdb"
                },
                {
                  "title": "Traces with AgentOS using SqliteDb",
                  "href": "/docs/examples/agent-os/tracing/dbs/basic-agent-with-sqlite"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/tracing-with-multi-db-and-tracing-flag"
                },
                {
                  "title": "Traces with AgentOS",
                  "href": "/docs/examples/agent-os/tracing/tracing-with-multi-db-scenario"
                }
              ]
            },
            {
              "title": "Workflow",
              "href": "/docs/examples/agent-os/workflow/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/agent-os/workflow/overview"
                },
                {
                  "title": "Basic Chat Workflow Agent",
                  "href": "/docs/examples/agent-os/workflow/basic-chat-workflow-agent"
                },
                {
                  "title": "Basic Workflow",
                  "href": "/docs/examples/agent-os/workflow/basic-workflow"
                },
                {
                  "title": "Basic Workflow Team",
                  "href": "/docs/examples/agent-os/workflow/basic-workflow-team"
                },
                {
                  "title": "Customer Research Workflow Parallel",
                  "href": "/docs/examples/agent-os/workflow/customer-research-workflow-parallel"
                },
                {
                  "title": "Workflow With Conditional",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-conditional"
                },
                {
                  "title": "Workflow With Custom Function Executors",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-custom-function"
                },
                {
                  "title": "Workflow With Custom Function Updating Session State",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-custom-function-updating-session-state"
                },
                {
                  "title": "Workflow With History",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-history"
                },
                {
                  "title": "Workflow With Input Schema",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-input-schema"
                },
                {
                  "title": "Workflow With Loop",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-loop"
                },
                {
                  "title": "Workflow With Nested Steps",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-nested-steps"
                },
                {
                  "title": "Workflow With Parallel",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-parallel"
                },
                {
                  "title": "Workflow With Parallel And Custom Function Step Stream",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-parallel-and-custom-function-step-stream"
                },
                {
                  "title": "Workflow With Router",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-router"
                },
                {
                  "title": "Workflow With Steps",
                  "href": "/docs/examples/agent-os/workflow/workflow-with-steps"
                }
              ]
            }
          ]
        },
        {
          "title": "Reasoning",
          "href": "/docs/examples/reasoning/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/reasoning/overview"
            },
            {
              "title": "Agents",
              "href": "/docs/examples/reasoning/agents/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/reasoning/agents/overview"
                },
                {
                  "title": "Treaty Of Versailles Analysis",
                  "href": "/docs/examples/reasoning/agents/analyse-treaty-of-versailles"
                },
                {
                  "title": "Capture Reasoning Content",
                  "href": "/docs/examples/reasoning/agents/capture-reasoning-content-default-cot"
                },
                {
                  "title": "Cerebras Default COT Fallback",
                  "href": "/docs/examples/reasoning/agents/cerebras-llama-default-cot"
                },
                {
                  "title": "OpenAI Default Chain Of Thought",
                  "href": "/docs/examples/reasoning/agents/default-chain-of-thought"
                },
                {
                  "title": "Fibonacci Script Planning",
                  "href": "/docs/examples/reasoning/agents/fibonacci"
                },
                {
                  "title": "Reasoning Finance Agent",
                  "href": "/docs/examples/reasoning/agents/finance-agent"
                },
                {
                  "title": "WatsonX Default COT Fallback",
                  "href": "/docs/examples/reasoning/agents/ibm-watsonx-default-cot"
                },
                {
                  "title": "Decimal Comparison Reasoning",
                  "href": "/docs/examples/reasoning/agents/is-9-11-bigger-than-9-9"
                },
                {
                  "title": "Future Life Storytelling",
                  "href": "/docs/examples/reasoning/agents/life-in-500000-years"
                },
                {
                  "title": "Missionaries And Cannibals Puzzle",
                  "href": "/docs/examples/reasoning/agents/logical-puzzle"
                },
                {
                  "title": "Sum Of Odd Numbers Proof",
                  "href": "/docs/examples/reasoning/agents/mathematical-proof"
                },
                {
                  "title": "Mistral Reasoning COT",
                  "href": "/docs/examples/reasoning/agents/mistral-reasoning-cot"
                },
                {
                  "title": "Python 101 Curriculum Planning",
                  "href": "/docs/examples/reasoning/agents/python-101-curriculum"
                },
                {
                  "title": "Scientific Abstract Critique",
                  "href": "/docs/examples/reasoning/agents/scientific-research"
                },
                {
                  "title": "Ship Of Theseus Debate",
                  "href": "/docs/examples/reasoning/agents/ship-of-theseus"
                },
                {
                  "title": "Strawberry Letter Counting",
                  "href": "/docs/examples/reasoning/agents/strawberry"
                },
                {
                  "title": "Trolley Problem Analysis",
                  "href": "/docs/examples/reasoning/agents/trolley-problem"
                }
              ]
            },
            {
              "title": "Models",
              "href": "/docs/examples/reasoning/models/xai/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/reasoning/models/xai/overview"
                },
                {
                  "title": "Async Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/anthropic/async-reasoning-stream"
                },
                {
                  "title": "Basic Reasoning",
                  "href": "/docs/examples/reasoning/models/anthropic/basic-reasoning"
                },
                {
                  "title": "Basic Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/anthropic/basic-reasoning-stream"
                },
                {
                  "title": "Reasoning Model Deepseek",
                  "href": "/docs/examples/reasoning/models/azure-ai-foundry/reasoning-model-deepseek"
                },
                {
                  "title": "Reasoning Model Stream Deepseek",
                  "href": "/docs/examples/reasoning/models/azure-ai-foundry/reasoning-model-stream-deepseek"
                },
                {
                  "title": "Basic Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/azure-openai/basic-reasoning-stream"
                },
                {
                  "title": "O3 Mini With Tools",
                  "href": "/docs/examples/reasoning/models/azure-openai/o3-mini-with-tools"
                },
                {
                  "title": "Reasoning Model Gpt 4 1",
                  "href": "/docs/examples/reasoning/models/azure-openai/reasoning-model-gpt-4-1"
                },
                {
                  "title": "Ethical Dilemma",
                  "href": "/docs/examples/reasoning/models/deepseek/ethical-dilemma"
                },
                {
                  "title": "Plan Itinerary",
                  "href": "/docs/examples/reasoning/models/deepseek/plan-itinerary"
                },
                {
                  "title": "Async Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/gemini/async-reasoning-stream"
                },
                {
                  "title": "Basic Reasoning",
                  "href": "/docs/examples/reasoning/models/gemini/basic-reasoning"
                },
                {
                  "title": "Basic Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/gemini/basic-reasoning-stream"
                },
                {
                  "title": "Deepseek Plus Claude",
                  "href": "/docs/examples/reasoning/models/groq/deepseek-plus-claude"
                },
                {
                  "title": "Fast Reasoning",
                  "href": "/docs/examples/reasoning/models/groq/fast-reasoning"
                },
                {
                  "title": "9 11 Or 9 9",
                  "href": "/docs/examples/reasoning/models/groq/or-9-9"
                },
                {
                  "title": "Local Reasoning",
                  "href": "/docs/examples/reasoning/models/ollama/local-reasoning"
                },
                {
                  "title": "Reasoning Model Deepseek",
                  "href": "/docs/examples/reasoning/models/ollama/reasoning-model-deepseek"
                },
                {
                  "title": "O3 Mini",
                  "href": "/docs/examples/reasoning/models/openai/o3-mini"
                },
                {
                  "title": "O3 Mini With Tools",
                  "href": "/docs/examples/reasoning/models/openai/o3-mini-with-tools"
                },
                {
                  "title": "Reasoning Effort",
                  "href": "/docs/examples/reasoning/models/openai/reasoning-effort"
                },
                {
                  "title": "Reasoning Model Gpt 4 1",
                  "href": "/docs/examples/reasoning/models/openai/reasoning-model-gpt-4-1"
                },
                {
                  "title": "Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/openai/reasoning-stream"
                },
                {
                  "title": "Reasoning Summary",
                  "href": "/docs/examples/reasoning/models/openai/reasoning-summary"
                },
                {
                  "title": "Basic Reasoning Stream",
                  "href": "/docs/examples/reasoning/models/vertex-ai/basic-reasoning-stream"
                },
                {
                  "title": "Reasoning Effort",
                  "href": "/docs/examples/reasoning/models/xai/reasoning-effort"
                }
              ]
            },
            {
              "title": "Teams",
              "href": "/docs/examples/reasoning/teams/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/reasoning/teams/overview"
                },
                {
                  "title": "Finance Team Chain Of Thought",
                  "href": "/docs/examples/reasoning/teams/finance-team-chain-of-thought"
                },
                {
                  "title": "Knowledge Tool Team",
                  "href": "/docs/examples/reasoning/teams/knowledge-tool-team"
                },
                {
                  "title": "Reasoning Finance Team",
                  "href": "/docs/examples/reasoning/teams/reasoning-finance-team"
                }
              ]
            },
            {
              "title": "Tools",
              "href": "/docs/examples/reasoning/tools/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/reasoning/tools/overview"
                },
                {
                  "title": "Azure Openai Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/azure-openai-reasoning-tools"
                },
                {
                  "title": "Capture Reasoning Content Knowledge Tools",
                  "href": "/docs/examples/reasoning/tools/capture-reasoning-content-knowledge-tools"
                },
                {
                  "title": "Capture Reasoning Content Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/capture-reasoning-content-reasoning-tools"
                },
                {
                  "title": "Cerebras Llama Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/cerebras-llama-reasoning-tools"
                },
                {
                  "title": "Claude Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/claude-reasoning-tools"
                },
                {
                  "title": "Gemini Finance Agent",
                  "href": "/docs/examples/reasoning/tools/gemini-finance-agent"
                },
                {
                  "title": "Gemini Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/gemini-reasoning-tools"
                },
                {
                  "title": "Groq Llama Finance Agent",
                  "href": "/docs/examples/reasoning/tools/groq-llama-finance-agent"
                },
                {
                  "title": "Ibm Watsonx Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/ibm-watsonx-reasoning-tools"
                },
                {
                  "title": "Knowledge Tools",
                  "href": "/docs/examples/reasoning/tools/knowledge-tools"
                },
                {
                  "title": "Llama Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/llama-reasoning-tools"
                },
                {
                  "title": "Memory Tools",
                  "href": "/docs/examples/reasoning/tools/memory-tools"
                },
                {
                  "title": "Ollama Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/ollama-reasoning-tools"
                },
                {
                  "title": "Openai Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/openai-reasoning-tools"
                },
                {
                  "title": "Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/reasoning-tools"
                },
                {
                  "title": "Vercel Reasoning Tools",
                  "href": "/docs/examples/reasoning/tools/vercel-reasoning-tools"
                },
                {
                  "title": "Workflow Tools",
                  "href": "/docs/examples/reasoning/tools/workflow-tools"
                }
              ]
            }
          ]
        },
        {
          "title": "Evals",
          "href": "/docs/examples/evals/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/evals/overview"
            },
            {
              "title": "Accuracy",
              "href": "/docs/examples/evals/accuracy/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/evals/accuracy/overview"
                },
                {
                  "title": "Comparison Accuracy Evaluation",
                  "href": "/docs/examples/evals/accuracy/accuracy-9-11-bigger-or-9-99"
                },
                {
                  "title": "Basic Accuracy Evaluation",
                  "href": "/docs/examples/evals/accuracy/accuracy-basic"
                },
                {
                  "title": "Team Accuracy Evaluation",
                  "href": "/docs/examples/evals/accuracy/accuracy-team"
                },
                {
                  "title": "Given Answer Accuracy Evaluation",
                  "href": "/docs/examples/evals/accuracy/accuracy-with-given-answer"
                },
                {
                  "title": "Tool-Enabled Accuracy Evaluation",
                  "href": "/docs/examples/evals/accuracy/accuracy-with-tools"
                },
                {
                  "title": "Accuracy Evaluation with Database Logging",
                  "href": "/docs/examples/evals/accuracy/db-logging"
                },
                {
                  "title": "Accuracy Evaluation with Custom Evaluator Agent",
                  "href": "/docs/examples/evals/accuracy/evaluator-agent"
                },
                {
                  "title": "Accuracy Eval Metrics",
                  "href": "/docs/examples/evals/accuracy/accuracy-eval-metrics"
                }
              ]
            },
            {
              "title": "Agent As Judge",
              "href": "/docs/examples/evals/agent-as-judge/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/evals/agent-as-judge/overview"
                },
                {
                  "title": "Basic Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-basic"
                },
                {
                  "title": "Batch Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-batch"
                },
                {
                  "title": "Binary Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-binary"
                },
                {
                  "title": "Custom Evaluator Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-custom-evaluator"
                },
                {
                  "title": "Post-Hook Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-post-hook"
                },
                {
                  "title": "Team Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-team"
                },
                {
                  "title": "Team Post-Hook Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-team-post-hook"
                },
                {
                  "title": "Guideline-Based Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-with-guidelines"
                },
                {
                  "title": "Tool-Using Agent-as-Judge Evaluation",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-with-tools"
                },
                {
                  "title": "Agent-as-Judge Eval Metrics",
                  "href": "/docs/examples/evals/agent-as-judge/agent-as-judge-eval-metrics"
                }
              ]
            },
            {
              "title": "Performance",
              "href": "/docs/examples/evals/performance/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/evals/performance/overview"
                },
                {
                  "title": "Async Function Performance Evaluation",
                  "href": "/docs/examples/evals/performance/async-function"
                },
                {
                  "title": "AutoGen Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/autogen-instantiation"
                },
                {
                  "title": "CrewAI Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/crewai-instantiation"
                },
                {
                  "title": "LangGraph Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/langgraph-instantiation"
                },
                {
                  "title": "OpenAI Agents Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/openai-agents-instantiation"
                },
                {
                  "title": "PydanticAI Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/pydantic-ai-instantiation"
                },
                {
                  "title": "Smolagents Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/comparison/smolagents-instantiation"
                },
                {
                  "title": "Performance Evaluation with Database Logging",
                  "href": "/docs/examples/evals/performance/db-logging"
                },
                {
                  "title": "Agent Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/instantiate-agent"
                },
                {
                  "title": "Agent-with-Tool Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/instantiate-agent-with-tool"
                },
                {
                  "title": "Team Instantiation Performance Evaluation",
                  "href": "/docs/examples/evals/performance/instantiate-team"
                },
                {
                  "title": "Memory Update Performance Evaluation",
                  "href": "/docs/examples/evals/performance/response-with-memory-updates"
                },
                {
                  "title": "Storage-Backed Response Performance Evaluation",
                  "href": "/docs/examples/evals/performance/response-with-storage"
                },
                {
                  "title": "Simple Response Performance Evaluation",
                  "href": "/docs/examples/evals/performance/simple-response"
                },
                {
                  "title": "Team Memory and Reasoning Performance Evaluation",
                  "href": "/docs/examples/evals/performance/team-response-with-memory-and-reasoning"
                },
                {
                  "title": "Multi-User Team Memory Performance Evaluation",
                  "href": "/docs/examples/evals/performance/team-response-with-memory-multi-user"
                },
                {
                  "title": "Simple Team Memory Performance Evaluation",
                  "href": "/docs/examples/evals/performance/team-response-with-memory-simple"
                }
              ]
            },
            {
              "title": "Reliability",
              "href": "/docs/examples/evals/reliability/team/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/evals/reliability/team/overview"
                },
                {
                  "title": "Reliability Evaluation with Database Logging",
                  "href": "/docs/examples/evals/reliability/db-logging"
                },
                {
                  "title": "Multiple Tool Call Reliability Evaluation",
                  "href": "/docs/examples/evals/reliability/multiple-tool-calls/calculator"
                },
                {
                  "title": "Asynchronous Reliability Evaluation",
                  "href": "/docs/examples/evals/reliability/reliability-async"
                },
                {
                  "title": "Single Tool Call Reliability Evaluation",
                  "href": "/docs/examples/evals/reliability/single-tool-calls/calculator"
                },
                {
                  "title": "Team Reliability Evaluation for News Search",
                  "href": "/docs/examples/evals/reliability/team/ai-news"
                }
              ]
            }
          ]
        },
        {
          "title": "Integrations",
          "href": "/docs/examples/integrations/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/integrations/overview"
            },
            {
              "title": "A2A",
              "href": "/docs/examples/integrations/a2a/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/a2a/overview"
                },
                {
                  "title": "Basic A2A Server",
                  "href": "/docs/examples/integrations/a2a/basic-agent/--main--"
                },
                {
                  "title": "Basic A2A Agent Executor",
                  "href": "/docs/examples/integrations/a2a/basic-agent/basic-agent"
                },
                {
                  "title": "Basic A2A Client",
                  "href": "/docs/examples/integrations/a2a/basic-agent/client"
                }
              ]
            },
            {
              "title": "Discord",
              "href": "/docs/examples/integrations/discord/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/discord/overview"
                },
                {
                  "title": "Discord Agent With Media",
                  "href": "/docs/examples/integrations/discord/agent-with-media"
                },
                {
                  "title": "Discord Agent With User Memory",
                  "href": "/docs/examples/integrations/discord/agent-with-user-memory"
                },
                {
                  "title": "Basic Discord Agent",
                  "href": "/docs/examples/integrations/discord/basic"
                }
              ]
            },
            {
              "title": "Memory",
              "href": "/docs/examples/integrations/memory/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/memory/overview"
                },
                {
                  "title": "Mem0 Integration",
                  "href": "/docs/examples/integrations/memory/mem0-integration"
                },
                {
                  "title": "Memori Integration",
                  "href": "/docs/examples/integrations/memory/memori-integration"
                },
                {
                  "title": "Zep Integration",
                  "href": "/docs/examples/integrations/memory/zep-integration"
                }
              ]
            },
            {
              "title": "Observability",
              "href": "/docs/examples/integrations/observability/workflows/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/observability/workflows/overview"
                },
                {
                  "title": "AgentOps Integration",
                  "href": "/docs/examples/integrations/observability/agent-ops"
                },
                {
                  "title": "Arize Phoenix Project Routing",
                  "href": "/docs/examples/integrations/observability/arize-phoenix-moving-traces-to-different-projects"
                },
                {
                  "title": "Arize Phoenix Via OpenInference",
                  "href": "/docs/examples/integrations/observability/arize-phoenix-via-openinference"
                },
                {
                  "title": "Arize Phoenix Local Via OpenInference",
                  "href": "/docs/examples/integrations/observability/arize-phoenix-via-openinference-local"
                },
                {
                  "title": "Atla Observability Integration",
                  "href": "/docs/examples/integrations/observability/atla-op"
                },
                {
                  "title": "Langfuse Via OpenInference",
                  "href": "/docs/examples/integrations/observability/langfuse-via-openinference"
                },
                {
                  "title": "Langfuse Via OpenInference With Response Model",
                  "href": "/docs/examples/integrations/observability/langfuse-via-openinference-response-model"
                },
                {
                  "title": "Langfuse Via OpenLIT",
                  "href": "/docs/examples/integrations/observability/langfuse-via-openlit"
                },
                {
                  "title": "LangSmith Via OpenInference",
                  "href": "/docs/examples/integrations/observability/langsmith-via-openinference"
                },
                {
                  "title": "Langtrace Integration",
                  "href": "/docs/examples/integrations/observability/langtrace-op"
                },
                {
                  "title": "LangWatch Integration",
                  "href": "/docs/examples/integrations/observability/langwatch-op"
                },
                {
                  "title": "Logfire Via OpenInference",
                  "href": "/docs/examples/integrations/observability/logfire-via-openinference"
                },
                {
                  "title": "Maxim Integration",
                  "href": "/docs/examples/integrations/observability/maxim-ops"
                },
                {
                  "title": "Opik Via OpenInference",
                  "href": "/docs/examples/integrations/observability/opik-via-openinference"
                },
                {
                  "title": "Langfuse Team Tracing Via OpenInference",
                  "href": "/docs/examples/integrations/observability/teams/langfuse-via-openinference-team"
                },
                {
                  "title": "Trace To Database",
                  "href": "/docs/examples/integrations/observability/trace-to-database"
                },
                {
                  "title": "Traceloop Integration",
                  "href": "/docs/examples/integrations/observability/traceloop-op"
                },
                {
                  "title": "Weave Integration",
                  "href": "/docs/examples/integrations/observability/weave-op"
                },
                {
                  "title": "Arize Phoenix Workflow Via OpenInference",
                  "href": "/docs/examples/integrations/observability/workflows/arize-phoenix-via-openinference-workflow"
                },
                {
                  "title": "Langfuse Workflows Via OpenInference",
                  "href": "/docs/examples/integrations/observability/workflows/langfuse-via-openinference-workflows"
                }
              ]
            },
            {
              "title": "Rag",
              "href": "/docs/examples/integrations/rag/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/rag/overview"
                },
                {
                  "title": "Agentic Rag Infinity Reranker",
                  "href": "/docs/examples/integrations/rag/agentic-rag-infinity-reranker"
                },
                {
                  "title": "Agentic Rag With Lightrag",
                  "href": "/docs/examples/integrations/rag/agentic-rag-with-lightrag"
                },
                {
                  "title": "Local Rag Langchain Qdrant",
                  "href": "/docs/examples/integrations/rag/local-rag-langchain-qdrant"
                }
              ]
            },
            {
              "title": "Surrealdb",
              "href": "/docs/examples/integrations/surrealdb/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/integrations/surrealdb/overview"
                },
                {
                  "title": "SurrealDB Custom Memory Instructions",
                  "href": "/docs/examples/integrations/surrealdb/custom-memory-instructions"
                },
                {
                  "title": "SurrealDB Memory DB Tools Control",
                  "href": "/docs/examples/integrations/surrealdb/db-tools-control"
                },
                {
                  "title": "SurrealDB Memory Creation",
                  "href": "/docs/examples/integrations/surrealdb/memory-creation"
                },
                {
                  "title": "SurrealDB Memory Search",
                  "href": "/docs/examples/integrations/surrealdb/memory-search-surreal"
                },
                {
                  "title": "Standalone SurrealDB Memory Operations",
                  "href": "/docs/examples/integrations/surrealdb/standalone-memory-surreal"
                }
              ]
            }
          ]
        },
        {
          "title": "Components",
          "href": "/docs/examples/components/overview",
          "items": [
            {
              "title": "Overview",
              "href": "/docs/examples/components/overview"
            },
            {
              "title": "AgentOS Registry App",
              "href": "/docs/examples/components/agent-os-registry"
            },
            {
              "title": "AgentOS Registry Demo",
              "href": "/docs/examples/components/demo"
            },
            {
              "title": "Load Agent from Database",
              "href": "/docs/examples/components/get-agent"
            },
            {
              "title": "Load Team from Database",
              "href": "/docs/examples/components/get-team"
            },
            {
              "title": "Load Workflow from Database",
              "href": "/docs/examples/components/get-workflow"
            },
            {
              "title": "Registry for Non-Serializable Components",
              "href": "/docs/examples/components/registry"
            },
            {
              "title": "Save Agent to Database",
              "href": "/docs/examples/components/save-agent"
            },
            {
              "title": "Save Team to Database",
              "href": "/docs/examples/components/save-team"
            },
            {
              "title": "Save Workflow to Database",
              "href": "/docs/examples/components/save-workflow"
            },
            {
              "title": "Workflows",
              "href": "/docs/examples/components/workflows/overview",
              "items": [
                {
                  "title": "Overview",
                  "href": "/docs/examples/components/workflows/overview"
                },
                {
                  "title": "Save Conditional Workflow Steps",
                  "href": "/docs/examples/components/workflows/save-conditional-steps"
                },
                {
                  "title": "Save Custom Executor Workflow Steps",
                  "href": "/docs/examples/components/workflows/save-custom-steps"
                },
                {
                  "title": "Save Loop Workflow Steps",
                  "href": "/docs/examples/components/workflows/save-loop-steps"
                },
                {
                  "title": "Save Parallel Workflow Steps",
                  "href": "/docs/examples/components/workflows/save-parallel-steps"
                },
                {
                  "title": "Save Router Workflow Steps",
                  "href": "/docs/examples/components/workflows/save-router-steps"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "Reference": [
    {
      "group": "Kern SDK Reference",
      "items": [
        {
          "title": "Agent",
          "href": "/docs/reference/agents/agent",
          "items": [
            {
              "title": "Agent",
              "href": "/docs/reference/agents/agent"
            },
            {
              "title": "RemoteAgent",
              "href": "/docs/reference/agents/remote-agent"
            }
          ]
        },
        {
          "title": "Team",
          "href": "/docs/reference/teams/team",
          "items": [
            {
              "title": "Team",
              "href": "/docs/reference/teams/team"
            },
            {
              "title": "RemoteTeam",
              "href": "/docs/reference/teams/remote-team"
            }
          ]
        },
        {
          "title": "Workflows",
          "href": "/docs/reference/workflows/workflow",
          "items": [
            {
              "title": "Workflow",
              "href": "/docs/reference/workflows/workflow"
            },
            {
              "title": "RemoteWorkflow",
              "href": "/docs/reference/workflows/remote-workflow"
            },
            {
              "title": "Step",
              "href": "/docs/reference/workflows/step"
            },
            {
              "title": "StepInput",
              "href": "/docs/reference/workflows/step_input"
            },
            {
              "title": "StepOutput",
              "href": "/docs/reference/workflows/step_output"
            },
            {
              "title": "Conditional Steps",
              "href": "/docs/reference/workflows/conditional-steps"
            },
            {
              "title": "Parallel Steps",
              "href": "/docs/reference/workflows/parallel-steps"
            },
            {
              "title": "Router Steps",
              "href": "/docs/reference/workflows/router-steps"
            },
            {
              "title": "Loop Steps",
              "href": "/docs/reference/workflows/loop-steps"
            },
            {
              "title": "Steps",
              "href": "/docs/reference/workflows/steps-step"
            }
          ]
        },
        {
          "title": "AgentOS",
          "href": "/docs/reference/agent-os/agent-os",
          "items": [
            {
              "title": "AgentOS",
              "href": "/docs/reference/agent-os/agent-os"
            },
            {
              "title": "AgentOSConfig",
              "href": "/docs/reference/agent-os/configuration"
            },
            {
              "title": "AuthorizationConfig",
              "href": "/docs/reference/agent-os/authorization-config"
            },
            {
              "title": "JWTMiddleware",
              "href": "/docs/reference/agent-os/jwt-middleware"
            },
            {
              "title": "Factories",
              "href": "/docs/reference/agent-os/factories"
            }
          ]
        },
        {
          "title": "Clients",
          "href": "/docs/reference/clients/agentos-client",
          "items": [
            {
              "title": "AgentOSClient",
              "href": "/docs/reference/clients/agentos-client"
            },
            {
              "title": "A2AClient",
              "href": "/docs/reference/clients/a2a-client"
            }
          ]
        },
        {
          "title": "Runs",
          "href": "/docs/reference/agents/run-response",
          "items": [
            {
              "title": "Run Output & Events",
              "href": "/docs/reference/agents/run-response"
            },
            {
              "title": "Team Run Response & Events",
              "href": "/docs/reference/teams/team-response"
            },
            {
              "title": "WorkflowRunOutput & Events",
              "href": "/docs/reference/workflows/run-output"
            },
            {
              "title": "Run Context",
              "href": "/docs/reference/run/run-context"
            },
            {
              "title": "Metrics",
              "href": "/docs/reference/run/metrics"
            }
          ]
        },
        {
          "title": "Sessions",
          "href": "/docs/reference/session/summary_manager",
          "items": [
            {
              "title": "Summary Manager",
              "href": "/docs/reference/session/summary_manager"
            },
            {
              "title": "Agent Session",
              "href": "/docs/reference/agents/session"
            },
            {
              "title": "Team Session",
              "href": "/docs/reference/teams/session"
            },
            {
              "title": "Workflow Session",
              "href": "/docs/reference/workflows/session"
            }
          ]
        },
        {
          "title": "Memory",
          "href": "/docs/reference/memory/memory",
          "items": [
            {
              "title": "Memory Manager",
              "href": "/docs/reference/memory/memory"
            }
          ]
        },
        {
          "title": "Context Compression",
          "href": "/docs/reference/compression/compression-manager",
          "items": [
            {
              "title": "Compression Manager",
              "href": "/docs/reference/compression/compression-manager"
            }
          ]
        },
        {
          "title": "Database",
          "href": "/docs/reference/storage/postgres",
          "items": [
            {
              "title": "PostgresDb",
              "href": "/docs/reference/storage/postgres"
            },
            {
              "title": "SqliteDb",
              "href": "/docs/reference/storage/sqlite"
            },
            {
              "title": "MongoDB",
              "href": "/docs/reference/storage/mongodb"
            },
            {
              "title": "InMemoryDb",
              "href": "/docs/reference/storage/in_memory"
            },
            {
              "title": "MySQLDb",
              "href": "/docs/reference/storage/mysql"
            },
            {
              "title": "RedisDb",
              "href": "/docs/reference/storage/redis"
            },
            {
              "title": "DynamoDB",
              "href": "/docs/reference/storage/dynamodb"
            },
            {
              "title": "SingleStoreDb",
              "href": "/docs/reference/storage/singlestore"
            },
            {
              "title": "SurrealDb",
              "href": "/docs/reference/storage/surrealdb"
            },
            {
              "title": "FirestoreDb",
              "href": "/docs/reference/storage/firestore"
            },
            {
              "title": "JsonDb",
              "href": "/docs/reference/storage/json"
            },
            {
              "title": "GcsJsonDb",
              "href": "/docs/reference/storage/gcs"
            },
            {
              "title": "MigrationManager",
              "href": "/docs/reference/storage/migrations"
            }
          ]
        },
        {
          "title": "Tracing",
          "href": "/docs/reference/tracing/trace",
          "items": [
            {
              "title": "Trace",
              "href": "/docs/reference/tracing/trace"
            },
            {
              "title": "Span",
              "href": "/docs/reference/tracing/span"
            }
          ]
        },
        {
          "title": "Hooks",
          "href": "/docs/reference/hooks/pre-hooks",
          "items": [
            {
              "title": "Pre-hooks",
              "href": "/docs/reference/hooks/pre-hooks"
            },
            {
              "title": "Post-hooks",
              "href": "/docs/reference/hooks/post-hooks"
            }
          ]
        },
        {
          "title": "Guardrails",
          "href": "/docs/reference/hooks/base-guardrail",
          "items": [
            {
              "title": "BaseGuardrail class",
              "href": "/docs/reference/hooks/base-guardrail"
            },
            {
              "title": "OpenAIModerationGuardrail",
              "href": "/docs/reference/hooks/openai-moderation-guardrail"
            },
            {
              "title": "PIIDetectionGuardrail",
              "href": "/docs/reference/hooks/pii-guardrail"
            },
            {
              "title": "PromptInjectionGuardrail",
              "href": "/docs/reference/hooks/prompt-injection-guardrail"
            }
          ]
        },
        {
          "title": "Models",
          "href": "/docs/reference/models/model",
          "items": [
            {
              "title": "Model",
              "href": "/docs/reference/models/model"
            },
            {
              "title": "OpenAI",
              "href": "/docs/reference/models/openai"
            },
            {
              "title": "AI/ML API",
              "href": "/docs/reference/models/aimlapi"
            },
            {
              "title": "Ollama",
              "href": "/docs/reference/models/ollama"
            },
            {
              "title": "Ollama Responses",
              "href": "/docs/reference/models/ollama-responses"
            },
            {
              "title": "Claude",
              "href": "/docs/reference/models/anthropic"
            },
            {
              "title": "Cohere",
              "href": "/docs/reference/models/cohere"
            },
            {
              "title": "DeepInfra",
              "href": "/docs/reference/models/deepinfra"
            },
            {
              "title": "DeepSeek",
              "href": "/docs/reference/models/deepseek"
            },
            {
              "title": "Gemini",
              "href": "/docs/reference/models/gemini"
            },
            {
              "title": "Groq",
              "href": "/docs/reference/models/groq"
            },
            {
              "title": "HuggingFace",
              "href": "/docs/reference/models/huggingface"
            },
            {
              "title": "Meta",
              "href": "/docs/reference/models/meta"
            },
            {
              "title": "Mistral",
              "href": "/docs/reference/models/mistral"
            },
            {
              "title": "Nebius",
              "href": "/docs/reference/models/nebius"
            },
            {
              "title": "N1N",
              "href": "/docs/reference/models/n1n"
            },
            {
              "title": "Nvidia",
              "href": "/docs/reference/models/nvidia"
            },
            {
              "title": "Perplexity",
              "href": "/docs/reference/models/perplexity"
            },
            {
              "title": "Requesty",
              "href": "/docs/reference/models/requesty"
            },
            {
              "title": "Together",
              "href": "/docs/reference/models/together"
            },
            {
              "title": "xAI",
              "href": "/docs/reference/models/xai"
            },
            {
              "title": "Vercel v0",
              "href": "/docs/reference/models/vercel"
            },
            {
              "title": "AWS Bedrock",
              "href": "/docs/reference/models/bedrock"
            },
            {
              "title": "AWS Bedrock Claude",
              "href": "/docs/reference/models/bedrock-claude"
            },
            {
              "title": "Azure AI Foundry",
              "href": "/docs/reference/models/azure"
            },
            {
              "title": "Azure OpenAI",
              "href": "/docs/reference/models/azure-open-ai"
            },
            {
              "title": "Fireworks",
              "href": "/docs/reference/models/fireworks"
            },
            {
              "title": "OpenRouter",
              "href": "/docs/reference/models/openrouter"
            },
            {
              "title": "OpenRouter Responses",
              "href": "/docs/reference/models/openrouter-responses"
            },
            {
              "title": "Sambanova",
              "href": "/docs/reference/models/sambanova"
            },
            {
              "title": "InternLM",
              "href": "/docs/reference/models/internlm"
            },
            {
              "title": "OpenAI Like",
              "href": "/docs/reference/models/openai-like"
            },
            {
              "title": "Open Responses",
              "href": "/docs/reference/models/open-responses"
            },
            {
              "title": "IBM WatsonX",
              "href": "/docs/reference/models/ibm-watsonx"
            }
          ]
        },
        {
          "title": "Tools",
          "href": "/docs/reference/tools/decorator",
          "items": [
            {
              "title": "Tool Decorator",
              "href": "/docs/reference/tools/decorator"
            },
            {
              "title": "Toolkit",
              "href": "/docs/reference/tools/toolkit"
            },
            {
              "title": "RetryAgentRun",
              "href": "/docs/reference/tools/retry-agent-run"
            },
            {
              "title": "StopAgentRun",
              "href": "/docs/reference/tools/stop-agent-run"
            }
          ]
        },
        {
          "title": "Knowledge",
          "href": "/docs/reference/knowledge/knowledge",
          "items": [
            {
              "title": "Knowledge",
              "href": "/docs/reference/knowledge/knowledge"
            },
            {
              "title": "Embedders",
              "href": "/docs/reference/knowledge/embedder/azure-openai",
              "items": [
                {
                  "title": "Azure OpenAI",
                  "href": "/docs/reference/knowledge/embedder/azure-openai"
                },
                {
                  "title": "Cohere",
                  "href": "/docs/reference/knowledge/embedder/cohere"
                },
                {
                  "title": "FastEmbed",
                  "href": "/docs/reference/knowledge/embedder/fastembed"
                },
                {
                  "title": "Fireworks",
                  "href": "/docs/reference/knowledge/embedder/fireworks"
                },
                {
                  "title": "Gemini",
                  "href": "/docs/reference/knowledge/embedder/gemini"
                },
                {
                  "title": "Hugging Face",
                  "href": "/docs/reference/knowledge/embedder/huggingface"
                },
                {
                  "title": "Mistral",
                  "href": "/docs/reference/knowledge/embedder/mistral"
                },
                {
                  "title": "Nebius",
                  "href": "/docs/reference/knowledge/embedder/nebius"
                },
                {
                  "title": "Ollama",
                  "href": "/docs/reference/knowledge/embedder/ollama"
                },
                {
                  "title": "OpenAI",
                  "href": "/docs/reference/knowledge/embedder/openai"
                },
                {
                  "title": "Sentence Transformer",
                  "href": "/docs/reference/knowledge/embedder/sentence-transformer"
                },
                {
                  "title": "Together",
                  "href": "/docs/reference/knowledge/embedder/together"
                },
                {
                  "title": "vLLM",
                  "href": "/docs/reference/knowledge/embedder/vllm"
                },
                {
                  "title": "VoyageAI",
                  "href": "/docs/reference/knowledge/embedder/voyageai"
                }
              ]
            },
            {
              "title": "Readers",
              "href": "/docs/reference/knowledge/reader/base",
              "items": [
                {
                  "title": "Reader",
                  "href": "/docs/reference/knowledge/reader/base"
                },
                {
                  "title": "Arxiv",
                  "href": "/docs/reference/knowledge/reader/arxiv"
                },
                {
                  "title": "CSV",
                  "href": "/docs/reference/knowledge/reader/csv"
                },
                {
                  "title": "Field Labeled CSV",
                  "href": "/docs/reference/knowledge/reader/field-labeled-csv"
                },
                {
                  "title": "Docx",
                  "href": "/docs/reference/knowledge/reader/docx"
                },
                {
                  "title": "JSON",
                  "href": "/docs/reference/knowledge/reader/json"
                },
                {
                  "title": "PDF",
                  "href": "/docs/reference/knowledge/reader/pdf"
                },
                {
                  "title": "PPTX",
                  "href": "/docs/reference/knowledge/reader/pptx"
                },
                {
                  "title": "Text",
                  "href": "/docs/reference/knowledge/reader/text"
                },
                {
                  "title": "Website",
                  "href": "/docs/reference/knowledge/reader/website"
                },
                {
                  "title": "YouTube",
                  "href": "/docs/reference/knowledge/reader/youtube"
                },
                {
                  "title": "FireCrawl",
                  "href": "/docs/reference/knowledge/reader/firecrawl"
                },
                {
                  "title": "Wikipedia",
                  "href": "/docs/reference/knowledge/reader/wikipedia"
                },
                {
                  "title": "Web Search",
                  "href": "/docs/reference/knowledge/reader/web-search"
                }
              ]
            },
            {
              "title": "Rerankers",
              "href": "/docs/reference/knowledge/reranker/cohere",
              "items": [
                {
                  "title": "Cohere",
                  "href": "/docs/reference/knowledge/reranker/cohere"
                }
              ]
            },
            {
              "title": "Chunking",
              "href": "/docs/reference/knowledge/chunking/fixed-size",
              "items": [
                {
                  "title": "Fixed Size",
                  "href": "/docs/reference/knowledge/chunking/fixed-size"
                },
                {
                  "title": "Agentic",
                  "href": "/docs/reference/knowledge/chunking/agentic"
                },
                {
                  "title": "Semantic",
                  "href": "/docs/reference/knowledge/chunking/semantic"
                },
                {
                  "title": "Recursive",
                  "href": "/docs/reference/knowledge/chunking/recursive"
                },
                {
                  "title": "Code",
                  "href": "/docs/reference/knowledge/chunking/code"
                },
                {
                  "title": "Document",
                  "href": "/docs/reference/knowledge/chunking/document"
                },
                {
                  "title": "CSV Row",
                  "href": "/docs/reference/knowledge/chunking/csv-row"
                },
                {
                  "title": "Markdown",
                  "href": "/docs/reference/knowledge/chunking/markdown"
                }
              ]
            },
            {
              "title": "Remote Content",
              "href": "/docs/reference/knowledge/remote-content/gcs-content",
              "items": [
                {
                  "title": "GCS",
                  "href": "/docs/reference/knowledge/remote-content/gcs-content"
                },
                {
                  "title": "S3",
                  "href": "/docs/reference/knowledge/remote-content/s3-content"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "AgentOS API Reference",
      "items": [
        {
          "title": "Overview",
          "href": "/docs/reference-api/overview"
        },
        {
          "title": "Home",
          "href": "/docs/reference-api/schema/home/api-information",
          "items": [
            {
              "title": "Api Information",
              "href": "/docs/reference-api/schema/home/api-information"
            }
          ]
        },
        {
          "title": "Health",
          "href": "/docs/reference-api/schema/health/health-check",
          "items": [
            {
              "title": "Health Check",
              "href": "/docs/reference-api/schema/health/health-check"
            }
          ]
        },
        {
          "title": "Core",
          "href": "/docs/reference-api/schema/core/get-os-configuration",
          "items": [
            {
              "title": "Get Os Configuration",
              "href": "/docs/reference-api/schema/core/get-os-configuration"
            },
            {
              "title": "Get Available Models",
              "href": "/docs/reference-api/schema/core/get-available-models"
            }
          ]
        },
        {
          "title": "Agents",
          "href": "/docs/reference-api/schema/agents/list-agent-runs",
          "items": [
            {
              "title": "List Agent Runs",
              "href": "/docs/reference-api/schema/agents/list-agent-runs"
            },
            {
              "title": "Create Agent Run",
              "href": "/docs/reference-api/schema/agents/create-agent-run"
            },
            {
              "title": "Cancel Agent Run",
              "href": "/docs/reference-api/schema/agents/cancel-agent-run"
            },
            {
              "title": "Continue Agent Run",
              "href": "/docs/reference-api/schema/agents/continue-agent-run"
            },
            {
              "title": "List All Agents",
              "href": "/docs/reference-api/schema/agents/list-all-agents"
            },
            {
              "title": "Get Agent Details",
              "href": "/docs/reference-api/schema/agents/get-agent-details"
            },
            {
              "title": "Get Agent Run",
              "href": "/docs/reference-api/schema/agents/get-agent-run"
            }
          ]
        },
        {
          "title": "Teams",
          "href": "/docs/reference-api/schema/teams/list-team-runs",
          "items": [
            {
              "title": "List Team Runs",
              "href": "/docs/reference-api/schema/teams/list-team-runs"
            },
            {
              "title": "Create Team Run",
              "href": "/docs/reference-api/schema/teams/create-team-run"
            },
            {
              "title": "Cancel Team Run",
              "href": "/docs/reference-api/schema/teams/cancel-team-run"
            },
            {
              "title": "List All Teams",
              "href": "/docs/reference-api/schema/teams/list-all-teams"
            },
            {
              "title": "Get Team Details",
              "href": "/docs/reference-api/schema/teams/get-team-details"
            },
            {
              "title": "Get Team Run",
              "href": "/docs/reference-api/schema/teams/get-team-run"
            }
          ]
        },
        {
          "title": "Workflows",
          "href": "/docs/reference-api/schema/workflows/list-all-workflows",
          "items": [
            {
              "title": "List All Workflows",
              "href": "/docs/reference-api/schema/workflows/list-all-workflows"
            },
            {
              "title": "Get Workflow Details",
              "href": "/docs/reference-api/schema/workflows/get-workflow-details"
            },
            {
              "title": "Execute Workflow",
              "href": "/docs/reference-api/schema/workflows/execute-workflow"
            },
            {
              "title": "Cancel Workflow Run",
              "href": "/docs/reference-api/schema/workflows/cancel-workflow-run"
            },
            {
              "title": "Get Workflow Run",
              "href": "/docs/reference-api/schema/workflows/get-workflow-run"
            }
          ]
        },
        {
          "title": "Slack",
          "href": "/docs/reference-api/schema/slack/slack-events",
          "items": [
            {
              "title": "Slack Events",
              "href": "/docs/reference-api/schema/slack/slack-events"
            }
          ]
        },
        {
          "title": "Whatsapp",
          "href": "/docs/reference-api/schema/whatsapp/status",
          "items": [
            {
              "title": "Status",
              "href": "/docs/reference-api/schema/whatsapp/status"
            },
            {
              "title": "Verify Webhook",
              "href": "/docs/reference-api/schema/whatsapp/verify-webhook"
            },
            {
              "title": "Webhook",
              "href": "/docs/reference-api/schema/whatsapp/webhook"
            }
          ]
        },
        {
          "title": "AGUI",
          "href": "/docs/reference-api/schema/agui/run-agent",
          "items": [
            {
              "title": "Run Agent",
              "href": "/docs/reference-api/schema/agui/run-agent"
            },
            {
              "title": "Get Status",
              "href": "/docs/reference-api/schema/agui/get-status"
            }
          ]
        },
        {
          "title": "A2A",
          "href": "/docs/reference-api/schema/a2a/get-agent-card",
          "items": [
            {
              "title": "Get Agent Card",
              "href": "/docs/reference-api/schema/a2a/get-agent-card"
            },
            {
              "title": "Run Message Agent",
              "href": "/docs/reference-api/schema/a2a/run-message-agent"
            },
            {
              "title": "Get Agent Task",
              "href": "/docs/reference-api/schema/a2a/get-agent-task"
            },
            {
              "title": "Cancel Agent Task",
              "href": "/docs/reference-api/schema/a2a/cancel-agent-task"
            },
            {
              "title": "Stream Message Agent",
              "href": "/docs/reference-api/schema/a2a/stream-message-agent"
            },
            {
              "title": "Get Team Card",
              "href": "/docs/reference-api/schema/a2a/get-team-card"
            },
            {
              "title": "Run Message Team",
              "href": "/docs/reference-api/schema/a2a/run-message-team"
            },
            {
              "title": "Get Team Task",
              "href": "/docs/reference-api/schema/a2a/get-team-task"
            },
            {
              "title": "Cancel Team Task",
              "href": "/docs/reference-api/schema/a2a/cancel-team-task"
            },
            {
              "title": "Stream Message Team",
              "href": "/docs/reference-api/schema/a2a/stream-message-team"
            },
            {
              "title": "Get Workflow Card",
              "href": "/docs/reference-api/schema/a2a/get-workflow-card"
            },
            {
              "title": "Run Message Workflow",
              "href": "/docs/reference-api/schema/a2a/run-message-workflow"
            },
            {
              "title": "Stream Message Workflow",
              "href": "/docs/reference-api/schema/a2a/stream-message-workflow"
            },
            {
              "title": "Send Message",
              "href": "/docs/reference-api/schema/a2a/send-message"
            },
            {
              "title": "Stream Message",
              "href": "/docs/reference-api/schema/a2a/stream-message"
            }
          ]
        },
        {
          "title": "Sessions",
          "href": "/docs/reference-api/schema/sessions/list-sessions",
          "items": [
            {
              "title": "List Sessions",
              "href": "/docs/reference-api/schema/sessions/list-sessions"
            },
            {
              "title": "Create New Session",
              "href": "/docs/reference-api/schema/sessions/create-new-session"
            },
            {
              "title": "Delete Multiple Sessions",
              "href": "/docs/reference-api/schema/sessions/delete-multiple-sessions"
            },
            {
              "title": "Get Session By Id",
              "href": "/docs/reference-api/schema/sessions/get-session-by-id"
            },
            {
              "title": "Delete Session",
              "href": "/docs/reference-api/schema/sessions/delete-session"
            },
            {
              "title": "Update Session",
              "href": "/docs/reference-api/schema/sessions/update-session"
            },
            {
              "title": "Get Session Runs",
              "href": "/docs/reference-api/schema/sessions/get-session-runs"
            },
            {
              "title": "Get Run By Id",
              "href": "/docs/reference-api/schema/sessions/get-run-by-id"
            },
            {
              "title": "Rename Session",
              "href": "/docs/reference-api/schema/sessions/rename-session"
            }
          ]
        },
        {
          "title": "Memory",
          "href": "/docs/reference-api/schema/memory/list-memories",
          "items": [
            {
              "title": "List Memories",
              "href": "/docs/reference-api/schema/memory/list-memories"
            },
            {
              "title": "Create Memory",
              "href": "/docs/reference-api/schema/memory/create-memory"
            },
            {
              "title": "Delete Multiple Memories",
              "href": "/docs/reference-api/schema/memory/delete-multiple-memories"
            },
            {
              "title": "Get Memory By Id",
              "href": "/docs/reference-api/schema/memory/get-memory-by-id"
            },
            {
              "title": "Delete Memory",
              "href": "/docs/reference-api/schema/memory/delete-memory"
            },
            {
              "title": "Update Memory",
              "href": "/docs/reference-api/schema/memory/update-memory"
            },
            {
              "title": "Get Memory Topics",
              "href": "/docs/reference-api/schema/memory/get-memory-topics"
            },
            {
              "title": "Get User Memory Statistics",
              "href": "/docs/reference-api/schema/memory/get-user-memory-statistics"
            },
            {
              "title": "Optimize User Memories",
              "href": "/docs/reference-api/schema/memory/optimize-user-memories"
            }
          ]
        },
        {
          "title": "Evals",
          "href": "/docs/reference-api/schema/evals/list-evaluation-runs",
          "items": [
            {
              "title": "List Evaluation Runs",
              "href": "/docs/reference-api/schema/evals/list-evaluation-runs"
            },
            {
              "title": "Execute Evaluation",
              "href": "/docs/reference-api/schema/evals/execute-evaluation"
            },
            {
              "title": "Delete Evaluation Runs",
              "href": "/docs/reference-api/schema/evals/delete-evaluation-runs"
            },
            {
              "title": "Get Evaluation Run",
              "href": "/docs/reference-api/schema/evals/get-evaluation-run"
            },
            {
              "title": "Update Evaluation Run",
              "href": "/docs/reference-api/schema/evals/update-evaluation-run"
            }
          ]
        },
        {
          "title": "Metrics",
          "href": "/docs/reference-api/schema/metrics/get-agentos-metrics",
          "items": [
            {
              "title": "Get Agentos Metrics",
              "href": "/docs/reference-api/schema/metrics/get-agentos-metrics"
            },
            {
              "title": "Refresh Metrics",
              "href": "/docs/reference-api/schema/metrics/refresh-metrics"
            }
          ]
        },
        {
          "title": "Knowledge",
          "href": "/docs/reference-api/schema/knowledge/list-content",
          "items": [
            {
              "title": "List Content",
              "href": "/docs/reference-api/schema/knowledge/list-content"
            },
            {
              "title": "Upload Content",
              "href": "/docs/reference-api/schema/knowledge/upload-content"
            },
            {
              "title": "Delete All Content",
              "href": "/docs/reference-api/schema/knowledge/delete-all-content"
            },
            {
              "title": "Upload Remote Content",
              "href": "/docs/reference-api/schema/knowledge/upload-remote-content"
            },
            {
              "title": "Get Content By Id",
              "href": "/docs/reference-api/schema/knowledge/get-content-by-id"
            },
            {
              "title": "Delete Content By Id",
              "href": "/docs/reference-api/schema/knowledge/delete-content-by-id"
            },
            {
              "title": "Update Content",
              "href": "/docs/reference-api/schema/knowledge/update-content"
            },
            {
              "title": "Get Content Status",
              "href": "/docs/reference-api/schema/knowledge/get-content-status"
            },
            {
              "title": "Search Knowledge",
              "href": "/docs/reference-api/schema/knowledge/search-knowledge"
            },
            {
              "title": "Get Config",
              "href": "/docs/reference-api/schema/knowledge/get-config"
            }
          ]
        },
        {
          "title": "Traces",
          "href": "/docs/reference-api/schema/traces/list-traces",
          "items": [
            {
              "title": "List Traces",
              "href": "/docs/reference-api/schema/traces/list-traces"
            },
            {
              "title": "Get Trace Or Span Detail",
              "href": "/docs/reference-api/schema/traces/get-trace-or-span-detail"
            },
            {
              "title": "Get Trace Statistics By Session",
              "href": "/docs/reference-api/schema/traces/get-trace-statistics-by-session"
            }
          ]
        },
        {
          "title": "Database",
          "href": "/docs/reference-api/schema/database/migrate-all-databases",
          "items": [
            {
              "title": "Migrate All Databases",
              "href": "/docs/reference-api/schema/database/migrate-all-databases"
            },
            {
              "title": "Migrate Database",
              "href": "/docs/reference-api/schema/database/migrate-database"
            }
          ]
        },
        {
          "title": "Components",
          "href": "/docs/reference-api/schema/components/list-components",
          "items": [
            {
              "title": "List Components",
              "href": "/docs/reference-api/schema/components/list-components"
            },
            {
              "title": "Create Component",
              "href": "/docs/reference-api/schema/components/create-component"
            },
            {
              "title": "Get Component",
              "href": "/docs/reference-api/schema/components/get-component"
            },
            {
              "title": "Delete Component",
              "href": "/docs/reference-api/schema/components/delete-component"
            },
            {
              "title": "Update Component",
              "href": "/docs/reference-api/schema/components/update-component"
            },
            {
              "title": "List Configs",
              "href": "/docs/reference-api/schema/components/list-configs"
            },
            {
              "title": "Create Config Version",
              "href": "/docs/reference-api/schema/components/create-config-version"
            },
            {
              "title": "Get Config Version",
              "href": "/docs/reference-api/schema/components/get-config-version"
            },
            {
              "title": "Delete Config Version",
              "href": "/docs/reference-api/schema/components/delete-config-version"
            },
            {
              "title": "Update Draft Config",
              "href": "/docs/reference-api/schema/components/update-draft-config"
            },
            {
              "title": "Get Current Config",
              "href": "/docs/reference-api/schema/components/get-current-config"
            },
            {
              "title": "Set Current Config Version",
              "href": "/docs/reference-api/schema/components/set-current-config-version"
            }
          ]
        },
        {
          "title": "Registry",
          "href": "/docs/reference-api/schema/registry/list-registry",
          "items": [
            {
              "title": "List Registry",
              "href": "/docs/reference-api/schema/registry/list-registry"
            }
          ]
        },
        {
          "title": "Schedules",
          "href": "/docs/reference-api/schema/schedules/list-schedules",
          "items": [
            {
              "title": "List Schedules",
              "href": "/docs/reference-api/schema/schedules/list-schedules"
            },
            {
              "title": "Create Schedule",
              "href": "/docs/reference-api/schema/schedules/create-schedule"
            },
            {
              "title": "Get Schedule",
              "href": "/docs/reference-api/schema/schedules/get-schedule"
            },
            {
              "title": "Delete Schedule",
              "href": "/docs/reference-api/schema/schedules/delete-schedule"
            },
            {
              "title": "Update Schedule",
              "href": "/docs/reference-api/schema/schedules/update-schedule"
            },
            {
              "title": "Enable Schedule",
              "href": "/docs/reference-api/schema/schedules/enable-schedule"
            },
            {
              "title": "Disable Schedule",
              "href": "/docs/reference-api/schema/schedules/disable-schedule"
            },
            {
              "title": "Trigger Schedule",
              "href": "/docs/reference-api/schema/schedules/trigger-schedule"
            },
            {
              "title": "List Schedule Runs",
              "href": "/docs/reference-api/schema/schedules/list-schedule-runs"
            },
            {
              "title": "Get Schedule Run",
              "href": "/docs/reference-api/schema/schedules/get-schedule-run"
            }
          ]
        },
        {
          "title": "Approvals",
          "href": "/docs/reference-api/schema/approvals/list-approvals",
          "items": [
            {
              "title": "List Approvals",
              "href": "/docs/reference-api/schema/approvals/list-approvals"
            },
            {
              "title": "Get Approval Count",
              "href": "/docs/reference-api/schema/approvals/get-approval-count"
            },
            {
              "title": "Get Approval",
              "href": "/docs/reference-api/schema/approvals/get-approval"
            },
            {
              "title": "Get Approval Status",
              "href": "/docs/reference-api/schema/approvals/get-approval-status"
            },
            {
              "title": "Delete Approval",
              "href": "/docs/reference-api/schema/approvals/delete-approval"
            },
            {
              "title": "Resolve Approval",
              "href": "/docs/reference-api/schema/approvals/resolve-approval"
            }
          ]
        }
      ]
    },
    {
      "group": "Kern Infra CLI",
      "items": [
        {
          "title": "Create",
          "href": "/docs/reference/kern-infra/cli/ws/create"
        },
        {
          "title": "Up",
          "href": "/docs/reference/kern-infra/cli/ws/up"
        },
        {
          "title": "Down",
          "href": "/docs/reference/kern-infra/cli/ws/down"
        },
        {
          "title": "Restart",
          "href": "/docs/reference/kern-infra/cli/ws/restart"
        },
        {
          "title": "Patch",
          "href": "/docs/reference/kern-infra/cli/ws/patch"
        },
        {
          "title": "Config",
          "href": "/docs/reference/kern-infra/cli/ws/config"
        },
        {
          "title": "Delete",
          "href": "/docs/reference/kern-infra/cli/ws/delete"
        }
      ]
    }
  ],
  "FAQs": [
    {
      "group": "FAQs",
      "items": [
        {
          "title": "Environment Variables Setup",
          "href": "/docs/faq/environment-variables"
        },
        {
          "title": "TPM rate limiting",
          "href": "/docs/faq/tpm-issues"
        },
        {
          "title": "AgentOS Connection Issues",
          "href": "/docs/faq/agentos-connection"
        },
        {
          "title": "OpenAI Key Request While Using Other Models",
          "href": "/docs/faq/openai-key-request-for-other-models"
        },
        {
          "title": "Structured outputs",
          "href": "/docs/faq/structured-outputs"
        },
        {
          "title": "When To Use A Workflow Vs A Team In Kern",
          "href": "/docs/faq/When-to-use-a-Workflow-vs-a-Team-in-Kern"
        },
        {
          "title": "Switching Models",
          "href": "/docs/faq/switching-models"
        },
        {
          "title": "Connecting to Tableplus",
          "href": "/docs/faq/connecting-to-tableplus"
        },
        {
          "title": "Docker Connection Error",
          "href": "/docs/faq/could-not-connect-to-docker"
        },
        {
          "title": "Authorization Failed - JWT Verification",
          "href": "/docs/faq/rbac-auth-failed"
        }
      ]
    }
  ]
};
