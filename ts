testcases


1. General Migration Validation 

Test Case: Validate successful migration 
Steps: 
Configure the BigQuery environment to transition from the On-Demand Pricing model to Slot-based Pricing. 
Assign a specific number of slots to the project. 
Run a basic query to confirm setup. 
Expected Result: The query executes successfully, and slot usage is tracked in the BigQuery Console. 

Test Case: Validate slot utilization during queries 
Steps: 
Run a query workload. 
Monitor slot utilization metrics using the Console. 
Expected Result: Slots are utilized proportionally to the workload. 

Test Case: Validate automatic scaling of slots 
Steps: 
Enable autoscaling for slots in a project. 
Run varying workloads to trigger scaling. 
Expected Result: Slots scale up or down automatically based on the workload. 

2. Query Performance Validation 
Test Case: Validate query performance with slot allocation 
Steps: 
Run a computationally intensive query in the slot-based pricing model. 
Measure query execution time. 
Compare results with previous execution under the On-Demand model. 
Expected Result: Query execution is optimized for slot allocation, showing consistent or better performance. 

Test Case: Validate concurrent queries 
Steps: 
Run multiple concurrent queries under the slot-based pricing model. 
Monitor the slot allocation for fair distribution. 
Expected Result: Slots are distributed appropriately, and queries execute without significant delays. 

3. Integration 
Test Case: Validate integration with monitoring tools 
Steps: 
Run workloads(Bankup, Daily load) and Run existing ETL pipelines under the slot-based pricing model.  
Expected Result: Slot usage and related metrics are visible and accurate in the monitoring tool. 
Workflows execute without modifications or errors. 

Test Case: Validate compatibility with existing workflows 
Steps: 
Run existing ETL pipelines with the new slot allocation model. 
Expected Result: Pipelines execute without requiring modifications. 

4. Resource Allocation 
Test Case: Validate resource prioritization 
Steps: 
Allocate priority slots to specific jobs or workloads. 
Run queries with and without priority settings. 
Expected Result: Queries with priority settings receive preferential resource allocation. 

Test Case: Validate resource limits 
Steps: 
Allocate fewer slots than required for a high-demand workload. 
Run multiple queries to simulate peak load. 
Expected Result: Queries queue as per available slots without crashing or failing. 

 

5. Billing Validation 
Test Case: Validate billing calculations 
Steps: 
Monitor the billing dashboard after running a series of queries. 
Compare cost metrics before and after migration. 
Expected Result: Billing reflects the cost of slots, and charges are consistent with slot-based pricing. 

Test Case: Validate cost-effectiveness 
Steps: 
Compare total costs for a month of usage under both On-Demand and Slot-based pricing. 
Expected Result: The slot-based model offers predictable and potentially reduced costs for sustained workloads. 

 

6. Reporting and Analytics 
Test Case: Validate slot usage reporting 
Steps: 
Access usage metrics for allocated slots via the BigQuery Admin Console. 
Expected Result: Accurate and detailed slot usage metrics are available. 

Test Case: Validate alerts for slot over-utilization 
Steps: 
Simulate high demand for allocated slots. 
Check for alert notifications when usage exceeds thresholds. 
Expected Result: Appropriate alerts are generated for over-utilization. 

7. Alerts and Notifications 
Test Case: Validate alerts for slot over-utilization 
Steps: 
Simulate high slot usage exceeding a defined threshold. 
Check if alert notifications are generated. 
Expected Result: Alerts are triggered and delivered as configured. 

Test Case: Validate alerts for slot under-utilization 
Steps: 
Run minimal workloads with a high slot allocation. 
Monitor for under-utilization alerts. 
Expected Result: Alerts notify about unused slot capacity. 

 

 
