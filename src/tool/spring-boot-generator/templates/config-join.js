                                .join(join=>{
                                            join.table(all.@targetTable)
                                                .includes(collection=>{
                                                        collection.includes(@outputColumn)
                                                                   @outputAlias
                                                })
                                                
                                                .type("LEFT")
                                                .joinCondition(@joinCondition)
                                                .alias(@alias)
                                                .build()
                                })