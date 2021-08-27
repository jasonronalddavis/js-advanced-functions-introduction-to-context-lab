// Your code here
function createEmployeeRecord(record){
    return{
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(recordArray){
    return recordArray.map(record => createEmployeeRecord(record))

}

function findEmployeeByFirstName(employeeRecords, name){
    return employeeRecords.find(function(employee){
        return employee.firstName == name
    })
}


