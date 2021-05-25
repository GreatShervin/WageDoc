using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WageDoc.Model;
using WageDoc.WageDoc;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MenuPage : TabbedPage
    {
        public MenuPage()
        {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
            var mainpage = this.Children[1];
            this.CurrentPage = mainpage;
        }

        private async void TapGestureRecognizer_Tapped(object sender, EventArgs e)
        {
            
            await Application.Current.MainPage.Navigation.PushAsync(new ProfilPage());
        }
    }
}