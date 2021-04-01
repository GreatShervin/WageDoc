using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WageDoc.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MenuPage : TabbedPage
    {
         List<Month> monthsList;
        public MenuPage()
        {
            InitializeComponent();
             monthsList = new List<Month>
            {
                new Month{ Id=1,Name="Jänner",year = 2021},
                new Month{ Id=2,Name="Februar",year = 2021},
                new Month{ Id=3,Name="März",year = 2021},
                new Month{ Id=4,Name="April",year = 2021},
                new Month{ Id=5,Name="Mai",year = 2021},
                new Month{ Id=6,Name="Juni",year = 2021},
                new Month{ Id=7,Name="Juli",year = 2021},
                new Month{ Id=8,Name="August",year = 2021},
                new Month{ Id=9,Name="September",year = 2021},
                new Month{ Id=10,Name="Oktober",year = 2021},
                new Month{ Id=11,Name="November",year = 2021},
                new Month{ Id=12,Name="Dezember",year = 2021},

            };
            MonthList.ItemsSource = monthsList;
        }
    }
}