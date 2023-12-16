package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "whippy/testutil/keeper"
	"whippy/x/whippy/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.WhippyKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
