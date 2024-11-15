### Q1. How long did you spend on the coding test?

Having prior experience in web development and frontend design made completing the task within the deadline manageable. Here’s the breakdown of the time I spent:

1. **Planning and Requirement Analysis**: 1 hour  
2. **Design and Documentation**: 3 hours  
3. **Coding and Testing**: 6 hours  
4. **Final Documentation and Summary**: 2 hours  

**Total Time Spent**: 12 hours  

---

### Q2. What was the most useful feature added to the latest version of your chosen language? Provide a code example demonstrating how you've used it.

One of the standout features in ECMAScript 2023 is the `Array.prototype.findLast()` method. This function lets you find the last element in an array that satisfies a specific condition.  

For instance, in the `Dashboard.js` file, it was used to locate the most recent overdue task:  

```javascript
const lastOverdueTask = tasks.findLast(
    (task) => new Date(task.dueDate) <= new Date() && !task.completed
);
console.log(lastOverdueTask?.title || "No overdue tasks");
```

This method enhances readability and efficiency when working with arrays, particularly when searching backward for matching elements.  

---

### Q3. How would you approach a performance issue in a production environment? Have you encountered such a situation?

To address performance issues in production, I would follow these steps:  

1. **Log Analysis**: Review server logs to identify errors or bottlenecks.  
2. **Performance Monitoring**: Use tools like Google Lighthouse, New Relic, or Datadog to track metrics such as response times and memory usage.  
3. **Browser Developer Tools**: Use the Performance tab to profile the app and pinpoint slow components or processes.  
4. **Network Inspection**: Evaluate network requests for slow or oversized assets.  

I’ve handled a similar scenario before, where I identified and resolved a memory leak in a React application. The issue was caused by unnecessary re-renders, which I mitigated by implementing lazy state initialization.  

---

### Q4. If you had more time, what additional features or improvements would you add to the task management application?

Here are some features and enhancements I would consider:  

1. **User Authentication**: Introduce sign-in functionality to enable task syncing across devices.  
2. **Real-Time Notifications**: Implement reminders and alerts for upcoming or overdue tasks.  
3. **Google Maps Integration**: Add a venue feature to allow users to search and select locations directly within the app.  
4. **Advanced Filtering Options**: Include filters and sorting based on criteria like due date, priority, or task categories.  
5. **Collaboration Support**: Allow users to invite others to collaborate on tasks and receive shared reminders.  
