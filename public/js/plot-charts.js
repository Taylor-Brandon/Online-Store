compare_membership = async () => {
    const response = await fetch('/dashboard/c_membership');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: ['Premium users', 'Free users'],
        type: 'pie'
      }];
  
    const layout = {
      title: 'Membership Pie Chart',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('pie-chart-01', data, layout);
  };

 customers_by_state = async () => {
    const response = await fetch('/dashboard/c_state');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: [ "New York", "Texas", "New Jersey", "California", "Illinois", "Georgia" ],
        type: 'pie'
      }];
  
    const layout = {
      title: 'State Pie Chart',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('pie-chart-02', data, layout);
  };

  subscription_customers = async () => {
    const response = await fetch('/dashboard/c_subscription');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: ['Subscription Users', 'Non-Subscription Users'],
        type: 'pie'
      }];
  
    const layout = {
      title: 'Subscription Pie Chart',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('pie-chart-03', data, layout);
  };

  compare_membership();
  customers_by_state();
  subscription_customers();