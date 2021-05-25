using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class VerificationPage : ContentPage
    {
        public VerificationPage()
        {
            InitializeComponent();
        }

        private void Entry_Focused(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.ForestGreen;
        }

        private void Entry_Focused_1(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.ForestGreen;
        }

        private void Entry_Focused_2(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.ForestGreen;
        }

        private void Entry_Focused_3(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.ForestGreen;
        }

        private void Entry_Focused_4(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.ForestGreen;
        }

        private void box1_Unfocused(object sender, FocusEventArgs e)
        {
            box1.BorderColor = Color.Gray;
            box2.BorderColor = Color.Gray;
            box3.BorderColor = Color.Gray;
            box4.BorderColor = Color.Gray;
            box5.BorderColor = Color.Gray;
        }
    }
}