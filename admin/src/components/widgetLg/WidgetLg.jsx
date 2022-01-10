import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i.pinimg.com/originals/5e/50/fa/5e50fa16044abc13c3088987a07a7d9f.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Adam Carol</span>
            </td>
            <td className="widgetLgData">31 Jun 2021</td>
            <td className="widgetLgAmount">$543.33</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i.pinimg.com/originals/5e/50/fa/5e50fa16044abc13c3088987a07a7d9f.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Adam Carol</span>
            </td>
            <td className="widgetLgData">31 Jun 2021</td>
            <td className="widgetLgAmount">$543.33</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i.pinimg.com/originals/5e/50/fa/5e50fa16044abc13c3088987a07a7d9f.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Adam Carol</span>
            </td>
            <td className="widgetLgData">31 Jun 2021</td>
            <td className="widgetLgAmount">$543.33</td>
            <td className="widgetLgStatus">
              <Button type="Pending" className="widgetLgButton" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i.pinimg.com/originals/5e/50/fa/5e50fa16044abc13c3088987a07a7d9f.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Adam Carol</span>
            </td>
            <td className="widgetLgData">31 Jun 2021</td>
            <td className="widgetLgAmount">$543.33</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
