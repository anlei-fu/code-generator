insert into user
(#column,
id)
values
@@datas,{(@name,@id)}

update user
@{set id=@id,}
@{set name=@name,}
where 
@{and age>@age}
@{and not in @ids}


@@datas
{
    update user
      @{set name=@item.name,}
      @{set id=@item.id}
   where 
        @{age>@age}
}


select 
  ${sql} 
 from user
 inner join job where user.id=job.id
 where
 @{}