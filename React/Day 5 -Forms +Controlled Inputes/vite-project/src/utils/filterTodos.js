export const filterTodos =(todos,
    search,filter) =>{
        return todos.filter((todo)=>{
            const matchesSearch =todo.title
            .toLowerCase()
            .includes(search.toLowerCase());

            if(filter === "completed"){
                return matchesSearch && todo.completed;
            }

            if(filter === "pending"){
                return matchesSearch && !todo.completed;
            }

            return matchesSearch;
        });
    
    };
