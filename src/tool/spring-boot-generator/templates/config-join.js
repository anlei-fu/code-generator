                                .join(join=>{
                                            join.table(all.@targetTable)
                                                .includes(collection=>{
                                                        collection.includes(@outputColumn)
                                                                   @outputAlias
                                                })
                                                
                                                .type("left")
                                                .joinCondition(@joinCondition)
                                                .alias(@alias)
                                                .build()
                                })