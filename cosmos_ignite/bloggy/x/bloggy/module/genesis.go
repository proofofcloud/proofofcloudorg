package bloggy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"bloggy/x/bloggy/keeper"
	"bloggy/x/bloggy/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the posty
	for _, elem := range genState.PostyList {
		k.SetPosty(ctx, elem)
	}

	// Set posty count
	k.SetPostyCount(ctx, genState.PostyCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PostyList = k.GetAllPosty(ctx)
	genesis.PostyCount = k.GetPostyCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
