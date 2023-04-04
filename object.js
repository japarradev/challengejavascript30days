function getStudentAverage(students) {

    const averageStudents = students.map(item => 
        {
            return {
                name: item.name,
                average: parseFloat(((item.grades.reduce((a,c)=>  a + c, 0)) / item.grades.length).toFixed(2))
            }
      
    });

         
        return {
            classAverage: parseFloat(((averageStudents.reduce((a, c) =>  a + c.average, 0 )) / averageStudents.length).toFixed(2)),
            students: [...averageStudents]
        };

  };
  
  console.log(
    getStudentAverage([
        {
          name: "Pedro",
          grades: [90, 87, 88, 90],
        },
        {
          name: "Jose",
          grades: [99, 71, 88, 96],
        },
        {
          name: "Maria",
          grades: [92, 81, 80, 96],
        },
      ])
  );