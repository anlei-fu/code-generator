                                .join(join=>{
                                            join.table(all.@targetTable)
                                                .includes(collection=>{
                                                        collection.includes(@outputColumn)
                                                                   @outputAlias
                                                })
                                                
                                                .type("left")
                                                .alias(@alias)
                                                .joinCondition(@joinCondition)
                                                .build()
                                })