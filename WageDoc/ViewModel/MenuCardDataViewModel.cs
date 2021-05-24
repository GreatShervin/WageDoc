using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using System.Windows.Input;
using WageDoc.Model;
using Xamarin.Forms;

namespace WageDoc.ViewModel
{
    class MenuCardDataViewModel : BaseViewModel
    {
        public MenuCardDataViewModel()
        {
            MenuCardDataModels = GetMenuCards();

        }

        ObservableCollection<MenuCardDataModel> MenuCardDataModels;


        public ObservableCollection<MenuCardDataModel> MenuCards
        {
            get { return MenuCardDataModels; }
            set
            {
                MenuCardDataModels = value;
                OnPropertyChanged();
            }
        }

        private MenuCardDataModel selectedMenuCard;

        public MenuCardDataModel SelectedMenuCardModel
        {
            get { return selectedMenuCard; }
            set
            {
                selectedMenuCard = value;
                OnPropertyChanged();
            }
        }

        public ICommand SelectionCommand => new Command(DisplayMenuCard);

        private void DisplayMenuCard()
        {
            
        }
        private ObservableCollection<MenuCardDataModel> GetMenuCards()
        {
            return new ObservableCollection<MenuCardDataModel> {
                new MenuCardDataModel
                {
                Title = "Unternehmen",
                Image = "company.png"
                },
                new MenuCardDataModel
                {
                    Title = "Profil",
                    Image = "profil.png"
                },
                new MenuCardDataModel
                {
                    Title = "Info",
                    Image = "info.png"
                },
                new MenuCardDataModel
                {
                    Title ="Dzovani",
                    Image ="info.png"
                }
                };
                
        }
        
    }
}
